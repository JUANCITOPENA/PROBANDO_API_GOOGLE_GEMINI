require('dotenv').config();
const axios = require('axios');

// --- Configuración CORS ---
const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// ✅ CORRECCIÓN: Lista Maestra actualizada con los modelos más recientes de Gemini 2.5.
// El orden es de mayor a menor capacidad/costo.
const ALL_MODELS = [
  'gemini-2.5-pro',         // El más nuevo y potente
  'gemini-2.5-flash',       // El más nuevo y rápido
  'gemini-1.5-pro-latest',    // Fallback potente de la generación anterior
  'gemini-1.5-flash-latest',  // Fallback rápido de la generación anterior
  'gemini-pro'                // Fallback final, el más antiguo
];

/**
 * Elige dinámicamente el ORDEN de los modelos a probar.
 * @param {number} totalChars - El número total de caracteres en la conversación.
 * @returns {string[]} Una lista ordenada de todos los modelos a probar.
 */
const getDynamicModelList = (totalChars) => {
  // Umbral ajustado: si la conversación tiene más de 4000 caracteres, usamos Pro.
  const THRESHOLD = 4000;

  if (totalChars > THRESHOLD) {
    console.log(`🤖 Conversación larga (${totalChars} chars). Priorizando Pro: ${ALL_MODELS[0]}.`);
    // El orden por defecto es ideal para prompts largos: 2.5 Pro, 1.5 Pro, etc.
    return [
        ALL_MODELS[0], // gemini-2.5-pro
        ALL_MODELS[2], // gemini-1.5-pro-latest
        ALL_MODELS[1], // gemini-2.5-flash
        ALL_MODELS[3], // gemini-1.5-flash-latest
        ALL_MODELS[4], // gemini-pro
    ];
  } else {
    console.log(`⚡ Conversación corta (${totalChars} chars). Priorizando Flash: ${ALL_MODELS[1]}.`);
    // Para prompts cortos, priorizamos los modelos Flash por velocidad.
    return [
        ALL_MODELS[1], // gemini-2.5-flash
        ALL_MODELS[3], // gemini-1.5-flash-latest
        ALL_MODELS[0], // gemini-2.5-pro
        ALL_MODELS[2], // gemini-1.5-pro-latest
        ALL_MODELS[4], // gemini-pro
    ];
  }
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchFromModels = async (messages, modelList) => {
  let lastError = null;

  for (let model of modelList) {
    // El endpoint v1beta es compatible con todos estos modelos.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GOOGLE_API_KEY}`;
    console.log(`🚀 Probando modelo para chat: ${model}`);

    try {
      const response = await axios.post(apiUrl, {
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 8192,
        },
        safetySettings: [
          { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
          { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
          { "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
          { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" }
        ]
      }, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 45000,
      });

      const candidate = response.data?.candidates?.[0];
      const hasTextResult = candidate?.content?.parts?.some(p => p.text);
      const finishReason = candidate?.finishReason;

      if (hasTextResult && (finishReason === 'STOP' || finishReason === 'MAX_TOKENS')) {
        console.log(`✅ Respuesta válida de ${model}. (Razón: ${finishReason})`);
        return response.data;
      }
      
      lastError = new Error(`Respuesta vacía o bloqueada de ${model} (Razón: ${finishReason || 'Desconocida'})`);
      console.warn(`⚠️ ${lastError.message}. Probando siguiente modelo...`);
      continue;

    } catch (error) {
      lastError = error;
      const status = error.response?.status || 500;
      const errorMessage = error.response?.data?.error?.message || error.message;

      console.warn(`❌ Error en ${model} [${status}]: ${errorMessage}. Probando siguiente...`);
      
      if (status === 400) {
        throw error;
      }
      
      await delay(500);
      continue;
    }
  }

  console.error('⛔ Todos los modelos en la lista fallaron.');
  throw lastError || new Error('No se pudo obtener una respuesta de ningún modelo de IA.');
};

// --- Handler principal ---
const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'El campo "messages" es requerido y debe ser un array no vacío.' });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('🚨 GOOGLE_API_KEY no configurada.');
    return res.status(500).json({ error: 'Error de configuración del servidor.' });
  }

  try {
    const totalChars = messages.reduce((acc, msg) => acc + (msg.parts[0].text ? msg.parts[0].text.length : 0), 0);
    const modelList = getDynamicModelList(totalChars);

    const responseData = await fetchFromModels(messages, modelList);
    return res.status(200).json(responseData);

  } catch (error) {
    console.error('💥 Error final en el handler:', error.message);
    const statusCode = error.response?.status || 500;
    let errorMessage = error.response?.data?.error?.message || 'No se pudo obtener una respuesta de los modelos. Intenta nuevamente.';

    if (statusCode === 429) errorMessage = 'Se ha excedido la cuota de solicitudes. Espera un momento.';
    else if (statusCode === 400) errorMessage = 'Solicitud inválida. Revisa el contenido, puede contener información sensible.';
    else if (error.code === 'ECONNABORTED') errorMessage = 'La solicitud tardó demasiado en responder (Timeout).';
    
    return res.status(statusCode).json({ error: errorMessage });
  }
};

module.exports = allowCors(handler);