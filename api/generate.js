require('dotenv').config();
const axios = require('axios');

// --- Configuración CORS ---
const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // ⚠️ Cambia en producción
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// --- Tu lista de Modelos en orden de prioridad ---
// Usamos modelos públicos confirmados para asegurar la funcionalidad. 
const MODELOS_GEMINI = [
  'gemini-2.5-pro',
  'gemini-2.5-flash',
  'gemini-2-pro',
  'gemini-2',
  'gemini-1.5-pro-latest',
  'gemini-1.5-flash-latest'
];


// --- Delay entre reintentos ---
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// --- Lógica de Fallback con validación de respuesta COMPLETA ---
const fetchFromModels = async (prompt, apiKey) => {
  let lastError = null;

  for (let model of MODELOS_GEMINI) {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    console.log(`🚀 Probando modelo: ${model}`);

    try {
      const response = await axios.post(
        apiUrl,
        {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192 // Límite alto para asegurar respuestas completas
          }
        },
        { 
            headers: { 'Content-Type': 'application/json' },
            timeout: 30000 // Timeout de 30 segundos para dar tiempo a respuestas largas
        }
      );

      // --- Validación Avanzada ---
      const candidate = response.data?.candidates?.[0];
      const textResult = candidate?.content?.parts?.[0]?.text;
      const finishReason = candidate?.finishReason;

      // Condición de Éxito: Hay texto Y la razón de finalización NO es por límite de tokens.
      if (textResult && finishReason !== 'MAX_TOKENS') {
        console.log(`✅ Respuesta completa y válida de ${model}. Razón: ${finishReason}`);
        return response.data;
      }
      
      if (finishReason === 'MAX_TOKENS') {
        console.warn(`⚠️ Respuesta de ${model} cortada por límite de tokens. Probando siguiente...`);
        lastError = new Error(`Respuesta incompleta (MAX_TOKENS) de ${model}`);
        continue;
      }
      
      console.warn(`⚠️ Contenido vacío o inválido de ${model}. Razón: ${finishReason}`);
      lastError = new Error(`Respuesta vacía o bloqueada (${finishReason}) de ${model}`);
      continue;

    } catch (error) {
      lastError = error;
      const status = error.response?.status || 500;
      const message = error.response?.data?.error?.message || 'Sin detalles';

      console.warn(`❌ Error en ${model} [${status}]: ${message}`);
      // Reintentamos con el siguiente modelo si es un error del servidor, de cuota o no encontrado.
      if ([429, 503, 404].includes(status) || status >= 500) {
        await delay(1000);
        continue;
      }
      
      // Otro tipo de error (ej. 400 Bad Request) no se reintenta y se lanza para ser manejado abajo.
      throw error;
    }
  }

  // Si el bucle termina, es porque todos los modelos de la lista fallaron.
  console.error('⛔ Todos los modelos fallaron o no devolvieron contenido válido.');
  throw lastError;
};

// --- Handler principal ---
const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'El campo "prompt" es requerido.' });

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error('🚨 GOOGLE_API_KEY no configurada.');
    return res.status(500).json({ error: 'Error de configuración del servidor.' });
  }

  try {
    const responseData = await fetchFromModels(prompt, apiKey);
    return res.status(200).json(responseData);

  } catch (error) {
    console.error('💥 Error final:', error.message);
    const statusCode = error.response?.status || 500;
    let errorMessage = error.response?.data?.error?.message || 'No se pudo obtener una respuesta válida de los modelos. Intenta nuevamente.';

    if (statusCode === 429) {
      errorMessage = 'Has excedido la cuota de solicitudes. Espera un momento.';
    } else if (statusCode === 400) {
      errorMessage = 'Solicitud inválida. Revisa tu prompt, puede contener información sensible.';
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = 'La solicitud tardó demasiado en responder (Timeout). Inténtalo de nuevo.';
    }

    return res.status(statusCode).json({ error: errorMessage });
  }
};

module.exports = allowCors(handler);