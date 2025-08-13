# 🚀 Simple Gemini AI Web App (Guía de Configuración Local)--
## 🛠️ Creando una Interfaz Personalizada con la API de Google: Uso, Integración y Despliegue con HTML, CSS, JS : Local y en Vercel 😃🚀

Esta es una aplicación web básica que permite a los usuarios enviar consultas a la **API de Google Gemini** y ver las respuestas. Utiliza un frontend simple (HTML, CSS, JS) y un backend serverless (Node.js) que se ejecuta localmente simulando el entorno de Vercel con `vercel dev`.

### Pruebala desde Aqui: https://y-82px6cxly-juancito-peas-projects.vercel.app/

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

1. **Node.js y npm:** Necesarios para ejecutar JavaScript en el backend, gestionar paquetes y usar Vercel CLI. Verifica tu instalación abriendo tu terminal y ejecutando:
   ```bash
   node -v
   npm -v
   ```
   Si no los tienes, descárgalos desde [nodejs.org](https://nodejs.org/) (se recomienda la versión LTS).

2. **Vercel CLI:** La herramienta de línea de comandos de Vercel. Instálala globalmente e inicia sesión:
   ```bash
   npm install -g vercel
   vercel login
   ```
   Sigue las instrucciones para autenticarte (generalmente a través del navegador).

3. **Google Gemini API Key:** Necesitas una clave API para usar Gemini. Puedes obtenerla desde [Google AI Studio](https://aistudio.google.com/) o la consola de Google Cloud. Asegúrate de que la API esté habilitada para tu proyecto.

4. **Un Editor de Código:** Como [Visual Studio Code](https://code.visualstudio.com/), Sublime Text, etc. En Nuestro Caso usaremos el VISUAL STUDIO CODE:


5. **Git (Opcional pero recomendado):** Si planeas usar GitHub.

## 🛠️ Herramientas Esenciales a Instalar

Instala estas herramientas iniciales y esenciales en tu computadora **ANTES** de empezar a crear los archivos del proyecto:

### 💻 PASO 1: Instalar Visual Studio Code (VS Code)

**¿Qué es?** Es el programa donde escribirás y editarás todo el código (HTML, CSS, JavaScript).

**¿Dónde conseguirlo?** Ve al sitio web oficial: https://code.visualstudio.com/

**Pasos de Instalación:**

1. Abre el enlace en tu navegador.
2. La página detectará automáticamente tu sistema operativo. Haz clic en el botón grande de descarga.
3. Se descargará un archivo instalador.
4. Ejecuta ese archivo.
5. En el asistente de instalación:
   - Acepta el acuerdo de licencia.
   - Elige la carpeta de instalación (la ubicación por defecto suele estar bien).
   - En "Tareas Adicionales", asegúrate de marcar "Agregar al PATH" (**importante**).
   - Haz clic en "Instalar".
6. ¡Listo! Ahora puedes buscar "Visual Studio Code" en tu menú de inicio y abrirlo.


## VISUAL STUDIO DESCARGAR E INSTALAR- VAMOS AL ENLACE:

![Mi imagen](RECURSOS/Screenshot_332.png)

## LE DAMOS A ESTA OPCION DE WINDOWS O EL SISTEMA QUE TENGAMOS:

![Mi imagen](RECURSOS/Screenshot_333.png)

## PANTALLA PRINCIPAL UNA VEZ HEMOS INSTALADO:

![Mi imagen](RECURSOS/Screenshot_334.png)


### ⚙️ PASO 2: Instalar Node.js y npm

**¿Qué es?** Node.js es el entorno que permite ejecutar JavaScript fuera del navegador. npm (Node Package Manager) viene incluido y se usa para instalar librerías.

**¿Dónde conseguirlo?** Ve al sitio web oficial: https://nodejs.org/

**Pasos de Instalación:**

1. Abre el enlace en tu navegador.
2. Elige la versión **LTS** (Long Term Support).
3. Ejecuta el archivo descargado.
4. En el asistente de instalación:
   - Acepta los términos de licencia.
   - Elige la carpeta de instalación.
   - Asegúrate de que la opción "Add to PATH" esté seleccionada (**crucial**).
   - Haz clic en "Instalar".
5. **Verificación Importante:**
   - Cierra TODOS los terminales abiertos.
   - Abre un NUEVO terminal.
   - Escribe `node -v` y presiona Enter.
   - Escribe `npm -v` y presiona Enter.
   - Si ves números de versión, ¡todo está correcto!
 
## NODE DESCARGAR E INSTALAR- VAMOS AL ENLACE:

![Mi imagen](RECURSOS/Screenshot_330.png)

## LE DAMOS A ESTA OPCION:

![Mi imagen](RECURSOS/Screenshot_331.png)
 
   

### 🔄 PASO 3: Instalar Vercel CLI

**¿Qué es?** Es la herramienta de línea de comandos de Vercel para ejecutar y desplegar tu proyecto.

**Pasos de Instalación:**

1. Abre un terminal.
2. Escribe el siguiente comando y presiona Enter:
   ```bash
   npm install -g vercel
   ```
3. Verifica la instalación:
   ```bash
   vercel --version
   ```
4. Iniciar Sesión:
   ```bash
   vercel login
   ```
5. Sigue las instrucciones para autorizar la conexión.

## 📁 Pasos de Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Crear la Carpeta del Proyecto

Crea una carpeta en tu computadora donde vivirá el proyecto. Abre tu terminal y usa:

```bash
# Elige una ubicación (ej. Escritorio)
cd ~/Desktop
# Crea la carpeta del proyecto
mkdir mi-proyecto-ia
# Entra en la carpeta
cd mi-proyecto-ia
```

### 2. Estructura de Archivos

Tu proyecto tendrá esta estructura:

```
mi-proyecto-ia/
├── api/
│   └── generate.js      <-- Archivo de la función serverless
├── .env                 <-- Archivo para la API Key (local)
├── .gitignore           <-- Archivo para ignorar archivos en Git/Vercel
├── index.html           <-- El frontend de la aplicación
├── style.css            <-- Estilos CSS para el frontend
└── package.json         <-- Se creará con npm init
```

Para crear esta estructura, dentro de la carpeta del proyecto ejecuta:

```bash
# Dentro de mi-proyecto-ia
mkdir api
touch index.html style.css .env .gitignore api/generate.js
```


Este archivo define la **estructura y el contenido** de la página web que el usuario ve e interactúa.

*   **Definición Estructural:** Establece la estructura básica del documento HTML (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
*   **Metadatos y Enlaces:** Configura metadatos (`<meta>`), el título de la página (`<title>`), el ícono (`<link rel="shortcut icon">`), y enlaza hojas de estilo externas (`<link rel="stylesheet" href="style.css">`) y librerías CSS (Prism).
*   **Contenedor Principal:** Envuelve todo el contenido visible en un `<div class="container">` para facilitar el diseño y la organización.
*   **Interfaz de Usuario (UI):**
    *   **Botón de Tema:** Incluye un botón (`<button id="themeToggle">`) para cambiar entre modo claro y oscuro.
    *   **Título y Avatar:** Muestra el título principal (`<h1>`) y una imagen de avatar (`<img>`).
    *   **Área de Prompt:** Proporciona un campo de texto (`<textarea id="promptInput">`) para que el usuario ingrese su consulta.
    *   **Botones de Acción Principal:** Agrega botones para "Enviar" (`<button id="executeBtn">`) la consulta y "Limpiar" (`<button id="clearBtn">`) la interfaz, incluyendo iconos SVG.
    *   **Área de Resultados:** Define un encabezado (`<h3>`) y un contenedor (`<div id="resultBox">`) donde se mostrará la respuesta de la IA.
    *   **Botones de Acción de Resultado:** Incluye botones para "Copiar" (`<button id="copyBtn">`) y "Guardar" (`<button id="saveBtn">`) la respuesta, con iconos SVG.
*   **Indicador de Carga:** Añade un elemento visual (`<div id="loading">`) que se muestra mientras se espera la respuesta de la IA.
*   **Inclusión de Scripts:** Carga librerías JavaScript externas necesarias (`marked.min.js`, `prism-core.min.js`, `prism-autoloader.min.js`) al final del `<body>`.
*   **Script Principal:** Contiene el código JavaScript embebido (`<script>...</script>`) que maneja la lógica del frontend de la aplicación.


# 📄 Código del Archivo `index.html`

![Mi imagen](RECURSOS/Screenshot_342.png)

# 📄 Código del Archivo `index.html`

```html
<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
  <meta charset="UTF-8">
  <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/10306/10306029.png" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi App con Gemini AI</title>
  
  <!-- CSS de Prism y sus plugins -->
  <link id="prism-theme" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.css" rel="stylesheet" />

  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
</head>

<body>
  <div class="app-wrapper">
    <aside class="history-panel" id="historyPanel">
      <div class="history-header">
        <h3>Historial de Chats</h3>
        <button id="clearHistoryBtn" title="Limpiar historial">🗑️</button>
      </div>
      <div class="history-list" id="historyList"></div>
    </aside>

    <main class="main-content" id="mainContent">
      <div class="theme-toggle-container">
        <button id="themeToggle" title="Cambiar modo claro/oscuro">🌞</button>
      </div>
      <button id="menuToggle" class="menu-toggle" title="Mostrar/Ocultar Historial">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="container">
        <div style="text-align: center;">
          <img src="https://avatars.githubusercontent.com/u/38921558?v=4" alt="Avatar" style="width: 70px; height: 70px; border-radius: 50%;">
        </div>
        <h1>🛠️ Creando una Interfaz Personalizada con la API de Google 😃🚀</h1>

        <div class="prompt-section">
          <div class="prompt-container">
            <textarea class="prompt-area" id="promptInput" placeholder="Escribe tu consulta o usa el micrófono..." rows="1"></textarea>
            <button id="micBtn" class="mic-btn" title="Activar micrófono">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </div>
          <br>
          <div class="button-group">
            <button id="executeBtn" title="Enviar consulta">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>
              Enviar
            </button>
            <button id="clearBtn" title="Limpiar consulta y resultado">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16"><path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/></svg>
              Limpiar
            </button>
          </div>
        </div>
        <div class="result-container">
          <div class="result-header">
            <h3>Respuesta de la IA 🤖:</h3>
            <div class="result-actions">
              <button id="copyBtn" title="Copiar todo el resultado" class="flurente-button" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-clipboard" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                </svg>
                <span class="copy-text">✨ Copiar Todo</span>
                </button>
              <div class="dropdown" id="downloadDropdown">
                <button id="saveBtn" class="flurente-green-button dropdown-toggle" title="Guardar como..." disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                </svg>
                <span class="save-text">✨ Guardar</span>
                </button>
                <div class="dropdown-menu" id="downloadOptions">
                  <a href="#" id="saveTxtBtn">Guardar como .txt</a>
                  <a href="#" id="saveCsvBtn">Guardar como .csv</a>
                  <a href="#" id="saveXlsxBtn">Guardar como .xlsx</a>
                </div>
              </div>
            </div>
          </div>
          <div id="resultBox" class="result-box">Esperando consulta...</div>
        </div>
      </div>
    </main>
  </div>

  <div class="loading" id="loading" style="display: none;">
    <div class="spinner"></div>
    <span>Cargando...</span>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  
  <!-- Scripts de Prism y Plugins (Método robusto) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>

  <script>
    // --- Referencias a elementos del DOM ---
    const executeBtn = document.getElementById('executeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const promptInput = document.getElementById('promptInput');
    const resultBox = document.getElementById('resultBox');
    const loadingIndicator = document.getElementById('loading');
    const copyBtn = document.getElementById('copyBtn');
    const saveBtn = document.getElementById('saveBtn');
    const themeToggleBtn = document.getElementById('themeToggle');
    const menuToggle = document.getElementById('menuToggle');
    const historyPanel = document.getElementById('historyPanel');
    const historyList = document.getElementById('historyList');
    const mainContent = document.getElementById('mainContent');
    const downloadDropdown = document.getElementById('downloadDropdown');
    const saveTxtBtn = document.getElementById('saveTxtBtn');
    const saveCsvBtn = document.getElementById('saveCsvBtn');
    const saveXlsxBtn = document.getElementById('saveXlsxBtn');
    const micBtn = document.getElementById('micBtn');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');

    // --- Lógica de Reconocimiento de Voz ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.lang = 'es-ES';
        recognition.interimResults = true;
        micBtn.addEventListener('click', () => {
            micBtn.classList.contains('is-listening') ? recognition.stop() : recognition.start();
        });
        recognition.onstart = () => {
            micBtn.classList.add('is-listening');
            promptInput.placeholder = "Escuchando...";
        };
        recognition.onend = () => {
            micBtn.classList.remove('is-listening');
            promptInput.placeholder = "Escribe tu consulta o usa el micrófono...";
        };
        recognition.onerror = (event) => console.error('Error en reconocimiento de voz:', event.error);
        recognition.onresult = (event) => {
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
            }
            promptInput.value += finalTranscript;
            promptInput.dispatchEvent(new Event('input'));
        };
    } else {
        micBtn.style.display = 'none';
    }
    
    // --- Lógica de la Interfaz (UI) ---
    themeToggleBtn.addEventListener('click', () => {
        let targetTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
        themeToggleBtn.textContent = targetTheme === 'light' ? '🌞' : '🌜';
        updatePrismTheme(targetTheme);
    });

    function updatePrismTheme(theme) {
        const prismLink = document.getElementById('prism-theme');
        if (prismLink) {
            prismLink.href = theme === 'dark'
              ? 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css'
              : 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css';
        }
    }

    menuToggle.addEventListener('click', () => {
        historyPanel.classList.toggle('open');
        mainContent.classList.toggle('history-open');
    });

    promptInput.addEventListener('input', () => {
        promptInput.style.height = 'auto';
        promptInput.style.height = (promptInput.scrollHeight) + 'px';
    });
    
    promptInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            executeBtn.click();
        }
    });

    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres borrar todo el historial?')) {
            localStorage.removeItem('chatHistory');
            loadHistory();
        }
    });

    // --- Lógica del Historial (localStorage) ---
    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
        historyList.innerHTML = '';
        if (history.length === 0) {
            historyList.innerHTML = '<div class="history-empty">No hay chats guardados.</div>';
            return;
        }
        history.forEach((item) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            const promptText = item.prompt.substring(0, 35) + (item.prompt.length > 35 ? '...' : '');
            historyItem.innerHTML = `<div class="history-prompt">${promptText}</div>`;
            historyItem.addEventListener('click', () => {
                promptInput.value = item.prompt;
                promptInput.dispatchEvent(new Event('input'));
                displayResult(item.response);
                if (window.innerWidth <= 768) {
                    historyPanel.classList.remove('open');
                    mainContent.classList.remove('history-open');
                }
            });
            historyList.appendChild(historyItem);
        });
    }

    function saveToHistory(prompt, response) {
        let history = JSON.parse(localStorage.getItem('chatHistory')) || [];
        history.unshift({ prompt, response });
        if (history.length > 50) history.pop();
        localStorage.setItem('chatHistory', JSON.stringify(history));
        loadHistory();
    }

    // --- Lógica Principal de la App ---
    executeBtn.addEventListener('click', executeQuery);
    clearBtn.addEventListener('click', clearAll);
    copyBtn.addEventListener('click', () => copyToClipboard(resultBox.innerText));
    saveTxtBtn.addEventListener('click', (e) => { e.preventDefault(); saveAsTextFile(); });
    saveCsvBtn.addEventListener('click', (e) => { e.preventDefault(); saveAsCsvFile(); });
    saveXlsxBtn.addEventListener('click', (e) => { e.preventDefault(); saveAsXlsxFile(); });

    async function executeQuery() {
        const originalPrompt = promptInput.value.trim();
        if (!originalPrompt) return showNotification('Por favor, escribe una consulta.');

        const enhancedPrompt = originalPrompt + "\n\n---\nInstrucción para la IA: Si la respuesta incluye código, formátalo siempre usando bloques de Markdown con el nombre del lenguaje especificado (ej: ```javascript ...código... ```).";
        setUIState(true);

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: enhancedPrompt }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || `Error ${response.status}`);
            
            const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (responseText) {
                displayResult(responseText);
                saveToHistory(originalPrompt, responseText);
            } else {
                throw new Error("El modelo no devolvió contenido de texto válido. Intenta reformular tu consulta.");
            }
        } catch (error) {
            console.error('Error en executeQuery:', error);
            resultBox.innerHTML = `<span class="error-message">${error.message}</span>`;
        } finally {
            setUIState(false);
        }
    }

    function displayResult(text) {
        resultBox.innerHTML = marked.parse(isCSV(text) ? renderCSVAsTable(text) : formatGeneralHTML(text));
        
        resultBox.querySelectorAll('pre').forEach(pre => {
            pre.classList.add('line-numbers');
        });

        Prism.highlightAllUnder(resultBox);
    }
    
    // --- Funciones de Formato y Renderizado ---
    function isCSV(text) {
        const lines = text.trim().split('\n');
        if (lines.length < 2) return false;
        const delimiter = lines[0].includes(',') ? ',' : (lines[0].includes(';') ? ';' : null);
        if (!delimiter) return false;
        const headerCols = lines[0].split(delimiter).length;
        return headerCols >= 2 && lines.every(line => line.split(delimiter).length === headerCols);
    }

    function renderCSVAsTable(csvText) {
        const lines = csvText.trim().split('\n');
        const delimiter = lines[0].includes(',') ? ',' : ';';
        let tableHtml = '<table><thead><tr>';
        lines[0].split(delimiter).forEach(header => tableHtml += `<th>${header.trim()}</th>`);
        tableHtml += '</tr></thead><tbody>';
        lines.slice(1).forEach(line => {
            tableHtml += '<tr>';
            line.split(delimiter).forEach(cell => tableHtml += `<td>${cell.trim()}</td>`);
            tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';
        return tableHtml;
    }

    function formatGeneralHTML(text) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        tempDiv.querySelectorAll('p, li').forEach(el => {
            el.style.lineHeight = '1.5';
            if (el.tagName === 'P') el.style.textAlign = 'justify';
        });
        tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
            el.innerHTML = `<b>${el.innerHTML}</b>`;
        });
        let processedHtml = tempDiv.innerHTML;
        processedHtml = processedHtml.replace(/\b(Importante)\b/gi, '⭐ $1');
        processedHtml = processedHtml.replace(/\b(Ejemplo)\b/gi, '💡 $1');
        processedHtml = processedHtml.replace(/\b(Nota)\b/gi, '📝 $1');
        return processedHtml;
    }

    // --- Funciones de Utilidad (Copiar, Guardar, UI) ---
    async function copyToClipboard(textToCopy) {
        if (!textToCopy || resultBox.textContent === 'Esperando consulta...') return showNotification('No hay nada que copiar.');
        try {
            await navigator.clipboard.writeText(textToCopy);
            const copyTextSpan = copyBtn.querySelector('.copy-text');
            const originalText = copyTextSpan.textContent;
            copyTextSpan.textContent = '¡Copiado!';
            copyBtn.disabled = true;
            setTimeout(() => {
                copyTextSpan.textContent = originalText;
                copyBtn.disabled = false;
            }, 1500);
        } catch (err) {
            console.error('Error al copiar:', err);
            showNotification('No se pudo copiar el texto.');
        }
    }

    function saveAsTextFile() {
        const textToSave = resultBox.innerText;
        if (!textToSave) return;
        triggerDownload(new Blob([textToSave], { type: 'text/plain;charset=utf-8' }), 'gemini-respuesta.txt');
    }

    function saveAsCsvFile() {
        const table = resultBox.querySelector('table');
        if (!table) return showNotification('No se encontró una tabla para exportar a CSV.');
        let csv = [];
        table.querySelectorAll('tr').forEach(row => {
            let rowData = [];
            row.querySelectorAll('th, td').forEach(cell => rowData.push(`"${cell.innerText.replace(/"/g, '""')}"`));
            csv.push(rowData.join(','));
        });
        triggerDownload(new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' }), 'gemini-tabla.csv');
    }

    function saveAsXlsxFile() {
        const table = resultBox.querySelector('table');
        if (!table) return showNotification('No se encontró una tabla para exportar a XLSX.');
        const wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, 'gemini-tabla.xlsx');
    }
    
    function triggerDownload(blob, filename) {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    }

    function setUIState(isLoading) {
        loadingIndicator.style.display = isLoading ? 'flex' : 'none';
        executeBtn.disabled = isLoading;
        clearBtn.disabled = isLoading;
        const noResult = resultBox.textContent === 'Esperando consulta...';
        copyBtn.disabled = isLoading || noResult;
        saveBtn.disabled = isLoading || noResult;
        downloadDropdown.toggleAttribute('disabled', isLoading || noResult);
    }

    function clearAll() {
        promptInput.value = '';
        resultBox.innerHTML = 'Esperando consulta...';
        promptInput.style.height = 'auto';
        setUIState(false);
    }

    function showNotification(message) {
        alert(message);
    }

    // --- Carga Inicial ---
    document.addEventListener('DOMContentLoaded', () => {
      const theme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', theme);
      themeToggleBtn.textContent = theme === 'light' ? '🌞' : '🌜';
      updatePrismTheme(theme);
      loadHistory();
      clearAll();
    });
  </script>
</body>
</html>
<!-- Fin del documento HTML -->

```

## 📋 Estructura del Documento

Este archivo HTML crea una interfaz de usuario simple para interactuar con la API de Google Gemini. Incluye:

### 🧩 Componentes Principales

1. **Contenedor Principal**
   - Título de la aplicación
   - Sección para ingresar prompts
   - Sección para mostrar resultados

2. **Sección de Prompt**
   - Campo de texto para escribir consultas
   - Botón "Enviar" con icono SVG
   - Botón "Limpiar" con icono SVG

3. **Sección de Resultados**
   - Encabezado que indica "Respuesta de la IA"
   - Botón "Copiar" para copiar resultados al portapapeles
   - Botón "Guardar" para descargar resultados como archivo de texto
   - Área donde se muestra la respuesta

4. **Indicador de Carga**
   - Animación spinner
   - Texto "Cargando..."

### 📚 Librerías Externas

- **Marked.js**: Para conversión de markdown a HTML
- **Prism.js**: Para resaltado de sintaxis en bloques de código

## 📜 Funcionalidad ✨ (JavaScript)

Este script maneja la **interactividad del usuario y la comunicación con el backend** directamente en el navegador.

*   **Referencias DOM:** Obtiene referencias a los elementos HTML clave (botones, textarea, caja de resultados, indicador de carga) usando `document.getElementById`.
*   **Manejo de Eventos:** Asigna funciones a los eventos `click` de los botones (Enviar, Limpiar, Copiar, Guardar, Tema) usando `addEventListener`.
*   **Lógica de Tema:**
    *   Detecta y aplica el tema guardado (`localStorage`) al cargar la página.
    *   Alterna el atributo `data-theme` en `<html>` al hacer clic en el botón de tema.
    *   Guarda la preferencia del tema en `localStorage`.
    *   Actualiza el icono/texto del botón de tema.
*   **Función `executeQuery()`:**
    *   Obtiene el `prompt` del usuario desde el textarea.
    *   Muestra el indicador de carga y deshabilita botones.
    *   Realiza una petición `fetch` de tipo `POST` al endpoint del backend (`/api/generate`), enviando el `prompt` en formato JSON.
    *   Maneja la respuesta: si es exitosa, llama a `displayResult()`; si hay error, muestra un mensaje de error en la caja de resultados.
    *   Oculta el indicador de carga y rehabilita botones al finalizar (`finally`).
*   **Función `displayResult()`:**
    *   Utiliza la librería `marked.parse()` para convertir la respuesta (que puede venir en formato Markdown) a HTML.
    *   Inserta el HTML resultante en la caja de resultados (`resultBox.innerHTML`).
    *   Utiliza `Prism.highlightAllUnder()` para aplicar resaltado de sintaxis a los bloques de código dentro de la respuesta.
    *   Habilita los botones de Copiar y Guardar.
*   **Función `copyToClipboard()`:**
    *   Obtiene el texto plano (`innerText`) de la caja de resultados.
    *   Utiliza la API del Portapapeles (`navigator.clipboard.writeText()`) para copiar el texto.
    *   Muestra una confirmación visual temporal en el botón "Copiar".
    *   Maneja errores si la copia falla.
*   **Función `saveAsTextFile()`:**
    *   Obtiene el texto plano (`innerText`) de la caja de resultados.
    *   Crea un `Blob` (objeto binario) con el texto.
    *   Genera una URL temporal para el Blob (`URL.createObjectURL`).
    *   Crea un enlace (`<a>`) invisible, le asigna la URL y un nombre de archivo (`.txt`).
    *   Simula un clic en el enlace para iniciar la descarga.
    *   Limpia la URL temporal (`URL.revokeObjectURL`).
*   **Funciones de Utilidad:**
    *   `showLoading()` / `hideLoading()`: Controlan la visibilidad del indicador de carga y el estado `disabled` de los botones.
    *   `clearAll()`: Limpia el área de prompt y la caja de resultados, restableciendo los botones a su estado inicial.
    *   `showNotification()`: Muestra mensajes simples al usuario (actualmente usa `alert`, podría mejorarse).
      
- [✅] Captura todos los elementos clave de la página HTML (botones 🔘, área de texto 📝, caja de resultados 📄) para darles funcionalidad.
- [✅] Implementa un cambio de tema 🎨 con opción entre modo claro ☀️ y oscuro 🌙, recordando la preferencia 💾 para futuras visitas.
- [✅] Gestiona el envío de consultas 🚀 con animación de carga ⏳ y comunicación segura con el backend 📡, que se conecta con la IA de Google Gemini 🤖.
- [✅] Maneja cuidadosamente tanto respuestas exitosas ✅ como posibles errores ❌.
- [✅] Formatea la respuesta de la IA con Markdown (**negritas**, listas) y colorea bloques de código 🌈 para mejorar la legibilidad.
- [✅] Proporciona botones para copiar 📋 el texto de la respuesta o descargarlo como archivo `.txt` 📁.
- [✅] Incluye funciones adicionales para controlar la animación de carga ⏳, limpiar la interfaz 🧹 y mostrar notificaciones 🔔 al usuario.
  
 ### 🔄 Principales funciones JavaScript:

- **executeQuery()**: Envía consultas a la API y procesa respuestas
- **displayResult()**: Muestra resultados formateados
- **copyToClipboard()**: Copia resultados al portapapeles
- **saveAsTextFile()**: Guarda resultados como archivo .txt
- **showLoading() / hideLoading()**: Controla la visibilidad del indicador de carga
- **clearAll()**: Limpia la consulta y los resultados
 
# CSS Styles Documentation: CSS (`style.css`)

Este archivo define la **apariencia visual y el diseño (layout)** de la aplicación web, asegurando que sea atractiva y funcional en diferentes dispositivos.

*   **Variables CSS (Custom Properties):** Define una paleta de colores, tamaños de fuente, espaciados y otros valores reutilizables (`:root`). Crucial para implementar los temas claro y oscuro (`[data-theme="dark"]`).
*   **Reset y Estilos Globales:** Aplica estilos base (`html`, `body`, `*`) para normalizar la apariencia entre navegadores y establece la fuente, tamaño de texto y altura de línea predeterminados.
*   **Estilo del Contenedor:** Da estilo al `<div class="container">` principal (ancho máximo, márgenes, padding, fondo, sombra, bordes redondeados).
*   **Estilo de Secciones:** Define la apariencia del área de prompt (`.prompt-section`, `.prompt-area`) y del área de resultados (`.result-container`, `.result-header`, `.result-box`).
*   **Estilo de Botones:** Aplica estilos generales a todos los botones (`button`) y estilos específicos a los botones de acción (Enviar, Limpiar, Copiar, Guardar, Tema) con colores distintivos, iconos SVG y efectos para estados (hover, active, disabled).
*   **Formato de Resultados:** Estiliza el texto dentro de la caja de resultados (`.result-box`), incluyendo texto normal, negritas (`<strong>`), enlaces (`<a>`), código inline (`<code>`), y bloques de código (`pre[class*="language-"]`) formateados con Prism.js. Ajusta el espaciado (`margin`, `line-height`) para mejorar la legibilidad.
*   **Indicador de Carga:** Da estilo al spinner animado (`.loading`, `.spinner`) y al texto asociado, asegurando que se muestre centrado y sobre el contenido.
*   **Botón de Tema:** Posiciona y estiliza el botón de cambio de tema (`.theme-toggle-container`, `#themeToggle`).
*   **Diseño Responsivo (Media Queries):** Utiliza `@media` para ajustar el layout, tamaños de fuente y espaciados en pantallas más pequeñas (tablets, móviles), asegurando una buena experiencia de usuario en cualquier dispositivo.

## 1. Variables CSS (Custom Properties)
## 2. Reset y Box-Sizing Global
## 3. Estilos del Contenedor Principal
## 4. Sección del Prompt
## 5. Grupos de Botones
## 6. Sección de Resultados
## 7. Loading Spinner
## 8. Media Queries para Responsividad


# Codigo Arvhivo CSS Hoja Styles.css

![Mi imagen](RECURSOS/Screenshot_343.png)

# Codigo Arvhivo CSS Hoja Styles.css

```css
/* style.css */

/* ==========================================
   1. Variables CSS (Custom Properties)
   ========================================== */
:root {
  --primary-color: #3498db;
  --primary-color-darker: #2980b9;
  --danger-color: #e74c3c;
  --danger-color-darker: #c0392b;
  --info-color: #0dcaf0;
  --info-color-darker: #0aa3c2;
  --success-color: #198754;
  --success-color-darker: #157347;
  --secondary-color: #6c757d;
  --disabled-color: #bdc3c7;
  --disabled-opacity: 0.65;
  --text-color-dark: #2c3e50;
  --text-color-medium: #34495e;
  --text-color-normal: #333;
  --text-color-light: #ccc;
  --text-color-white: #fff;
  --text-color-error: var(--danger-color);
  --text-color-placeholder: #888;
  --background-color-body: #f4f7f6;
  --background-color-container: #ffffff;
  --background-color-input: #ffffff;
  --background-color-result: #f9f9f9;
  --background-color-code: #f5f2f0;
  --background-color-overlay: rgba(255, 255, 255, 0.7);
  --background-color-button-toggle: #eee;
  --background-color-button-toggle-hover: #ddd;
  --border-color-light: #e0e0e0;
  --border-color-medium: #dcdcdc;
  --border-color-focus: var(--primary-color);
  --border-radius-standard: 4px;
  --border-radius-large: 8px;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --shadow-container: 0 4px 8px var(--shadow-color);
  --shadow-button-hover: 0 2px 5px rgba(0, 0, 0, 0.2);
  --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-family-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --base-font-size: 17px;
  --line-height-normal: 1.6;
  --spacing-unit: 8px;
  --button-padding-y: 10px;
  --button-padding-x: 20px;
  --button-action-padding-y: 5px;
  --button-action-padding-x: 10px;
  --transition-speed: 0.3s;
  --history-panel-width: 280px;
}

[data-theme="dark"] {
  --primary-color: #5dade2;
  --primary-color-darker: #85c1e9;
  --danger-color: #f1948a;
  --danger-color-darker: #e6b0aa;
  --info-color: #76d7c4;
  --info-color-darker: #a3e4d7;
  --success-color: #7dcea0;
  --success-color-darker: #a9dfbf;
  --secondary-color: #99a3a4;
  --disabled-color: #7f8c8d;
  --text-color-dark: #ecf0f1;
  --text-color-medium: #bdc3c7;
  --text-color-normal: #e0e0e0;
  --text-color-light: #95a5a6;
  --text-color-white: #1c1c1c;
  --text-color-error: var(--danger-color);
  --text-color-placeholder: #777;
  --background-color-body: #2c3e50;
  --background-color-container: #34495e;
  --background-color-input: #465a70;
  --background-color-result: #405164;
  --background-color-code: #2d2d2d;
  --background-color-overlay: rgba(0, 0, 0, 0.6);
  --background-color-button-toggle: #444;
  --background-color-button-toggle-hover: #555;
  --border-color-light: #4a637d;
  --border-color-medium: #56708a;
  --border-color-focus: var(--primary-color);
  --shadow-color: rgba(0, 0, 0, 0.3);
  --shadow-container: 0 4px 12px var(--shadow-color);
}

/* ==========================================
   2. Reset Básico y Estructura Principal
   ========================================== */
html { box-sizing: border-box; scroll-behavior: smooth; }
*, *::before, *::after { box-sizing: inherit; margin: 0; padding: 0; }
body {
  font-family: var(--font-family-sans);
  font-size: var(--base-font-size);
  background-color: var(--background-color-body);
  color: var(--text-color-normal);
  transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  overflow-x: hidden;
}
.app-wrapper { display: flex; position: relative; }

/* ==========================================
   3. Panel de Historial y Menú Hamburguesa
   ========================================== */
.history-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--history-panel-width);
  height: 100vh;
  background-color: var(--background-color-container);
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transform: translateX(-100%);
  transition: transform var(--transition-speed) ease-in-out;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}
.history-panel.open {
  transform: translateX(0);
}
.history-header {
  padding: 15px;
  border-bottom: 1px solid var(--border-color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.history-header h3 {
  color: var(--text-color-dark);
  margin: 0;
}
#clearHistoryBtn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 5px;
    color: var(--text-color-normal);
}
.history-list {
  flex-grow: 1;
  overflow-y: auto;
}
.history-item {
  padding: 12px 15px;
  border-bottom: 1px solid var(--border-color-light);
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color var(--transition-speed) ease;
}
.history-item:hover {
  background-color: var(--background-color-result);
}
.history-empty {
  padding: 20px;
  text-align: center;
  color: var(--secondary-color);
  font-style: italic;
}
.menu-toggle {
  position: fixed;
  top: 15px;
  left: 15px;
  width: 40px;
  height: 40px;
  background: var(--background-color-button-toggle);
  border: 1px solid var(--border-color-medium);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
}
.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-color-normal);
}

/* ==========================================
   4. Contenido Principal y Contenedor
   ========================================== */
.main-content {
  width: 100%;
  padding: calc(var(--spacing-unit) * 2.5);
  transition: margin-left var(--transition-speed) ease-in-out;
}
.main-content.history-open {
  margin-left: var(--history-panel-width);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(var(--spacing-unit) * 3);
  background-color: var(--background-color-container);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-container);
  transition: background-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
}
h1 {
  text-align: center;
  color: var(--text-color-dark);
  margin-bottom: calc(var(--spacing-unit) * 4);
  font-weight: 600;
  transition: color var(--transition-speed) ease;
}

/* ==========================================
   5. Prompt, Micrófono y Botones
   ========================================== */
.prompt-section {
  margin-bottom: calc(var(--spacing-unit) * 3);
}
.prompt-container {
  position: relative;
  display: flex;
  align-items: flex-start;
}
.prompt-area {
  width: 100%;
  min-height: 40px;
  padding: 12px 50px 12px 12px;
  border: 1px solid var(--border-color-medium);
  border-radius: var(--border-radius-standard);
  font-family: inherit;
  font-size: 18px;
  line-height: 1.5;
  resize: none;
  overflow-y: hidden;
  background-color: var(--background-color-input);
  color: var(--text-color-normal);
  transition: all var(--transition-speed) ease;
}
.prompt-area:focus {
  outline: none;
  border-color: var(--border-color-focus);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}
.mic-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: var(--secondary-color);
  transition: color var(--transition-speed) ease, transform 0.1s ease;
}
.mic-btn:hover {
  color: var(--primary-color);
}
.mic-btn.is-listening {
  color: var(--danger-color);
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.button-group, .result-actions {
  display: flex;
  gap: calc(var(--spacing-unit) * 1.5);
  flex-wrap: wrap;
}
button, .dropdown-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-unit);
  padding: var(--button-padding-y) var(--button-padding-x);
  border: none;
  border-radius: var(--border-radius-standard);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  color: #fff;
  line-height: 1.2;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
}
button:not([disabled]):hover, .dropdown-toggle:not([disabled]):hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-button-hover);
}
button:not([disabled]):active, .dropdown-toggle:not([disabled]):active {
  transform: translateY(0);
  box-shadow: none;
}
button svg { width: 1em; height: 1em; fill: currentColor; }

#executeBtn { background-color: var(--primary-color); }
#executeBtn:hover { background-color: var(--primary-color-darker); }
#clearBtn { background-color: var(--danger-color); }
#clearBtn:hover { background-color: var(--danger-color-darker); }

#copyBtn {
  background: linear-gradient(90deg, #00ffc8 0%, #2f9efc 100%);
  color: #fff;
  border: none;
  padding: 10px 14px;
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 255, 200, 0.6);
  transition: all 0.3s ease-in-out;
}
#saveBtn {
  background: linear-gradient(90deg, #00ff91 0%, #6aff00 100%);
  color: #000;
  border: none;
  padding: 10px 14px;
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 8px;
  box-shadow: 0 0 14px rgba(0, 255, 145, 0.6);
  transition: all 0.3s ease-in-out;
}

button:disabled {
  background-color: var(--disabled-color) !important;
  background-image: none !important;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  opacity: var(--disabled-opacity);
}

/* ==========================================
   6. Menú Desplegable de Descarga
   ========================================== */
.dropdown { position: relative; display: inline-block; }
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: var(--background-color-container);
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: var(--border-radius-standard);
  overflow: hidden;
  bottom: 100%;
  margin-bottom: 5px;
}
.dropdown-menu a {
  color: var(--text-color-normal);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-menu a:hover { background-color: var(--background-color-result); }
.dropdown:hover .dropdown-menu { display: block; }
.dropdown[disabled] .dropdown-toggle, #saveBtn[disabled] {
    background-color: var(--disabled-color) !important;
    background-image: none !important;
    cursor: not-allowed;
    opacity: var(--disabled-opacity);
}

/* ==========================================
   7. Sección de Resultados y Tablas
   ========================================== */
.result-container { margin-top: calc(var(--spacing-unit) * 2); }
.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-unit);
  flex-wrap: wrap;
  gap: var(--spacing-unit);
}
.result-header h3 {
  color: var(--text-color-medium);
  flex-grow: 1;
  font-size: calc(var(--base-font-size) + 2px);
  font-weight: 600;
}
.result-box {
  padding: calc(var(--spacing-unit) * 2);
  border: 1px solid var(--border-color-light);
  border-radius: var(--border-radius-standard);
  background-color: var(--background-color-result);
  min-height: 150px;
  font-family: var(--font-family-sans);
  color: var(--text-color-normal);
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-x: auto;
}
.result-box .error-message {
  color: var(--text-color-error);
  font-weight: bold;
}
.result-box strong { color: var(--text-color-dark); font-weight: 600; }
.result-box a { color: var(--primary-color); text-decoration: none; }
.result-box a:hover { text-decoration: underline; color: var(--primary-color-darker); }
.result-box table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}
.result-box th, .result-box td {
  border: 1px solid var(--border-color-medium);
  padding: 8px;
  text-align: left;
}
.result-box th {
  background-color: var(--background-color-code);
  font-weight: bold;
}
.result-box tr:nth-child(even) { background-color: rgba(0,0,0,0.02); }
[data-theme="dark"] .result-box tr:nth-child(even) { background-color: rgba(255,255,255,0.05); }

/* ==========================================
   8. Bloques de Código (Prism) y Plugins
   ========================================== */
.result-box pre[class*="language-"] {
  position: relative;
  font-family: var(--font-family-mono);
  overflow: auto;
  padding: 1em; 
}

/* Ajuste para el plugin de números de línea */
pre.line-numbers {
  padding-left: 3.8em;
}

div.code-toolbar {
  position: relative;
}

div.code-toolbar > .toolbar {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 3; /* Asegura que esté sobre los números de línea */
}

div.code-toolbar:hover > .toolbar {
  opacity: 1;
}

/* ✅ FIX: Estilo del botón de copiar de Prism */
div.code-toolbar > .toolbar .toolbar-item > button {
  background: var(--background-color-button-toggle);
  color: var(--text-color-dark); /* Texto oscuro para tema claro */
  border: 1px solid var(--border-color-light);
  border-radius: var(--border-radius-standard);
  padding: 0.3em 0.6em;
  font-size: 13px;
  cursor: pointer;
  box-shadow: none;
}

/* ✅ FIX: Estilo para el tema oscuro */
[data-theme="dark"] div.code-toolbar > .toolbar .toolbar-item > button {
    background: #5c6e80; /* Un gris medio oscuro */
    color: var(--text-color-dark); /* Texto claro */
    border-color: #789;
}

/* Estilo hover para ambos temas */
div.code-toolbar > .toolbar .toolbar-item > button:hover {
  background: var(--primary-color) !important;
  color: #fff !important;
  border-color: transparent !important;
}

[data-theme="dark"] div.code-toolbar > .toolbar .toolbar-item > button:hover {
  background: var(--primary-color-darker) !important;
}

/* Ocultar el botón de copiar que hacíamos manualmente */
.copy-code-btn {
    display: none;
}

/* ==========================================
   9. Loading Spinner y Otros
   ========================================== */
.loading {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: var(--background-color-overlay);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  flex-direction: column;
  gap: var(--spacing-unit);
  color: var(--text-color-normal);
}
.spinner {
  width: 40px; height: 40px;
  border: 4px solid rgba(127, 140, 141, 0.3);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }

.theme-toggle-container {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1002;
}

/* ==========================================
   10. Media Queries para Responsividad
   ========================================== */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0 !important;
    padding: 15px;
  }
  .main-content.history-open {
    transform: translateX(var(--history-panel-width));
  }
  .history-panel {
    box-shadow: 4px 0 10px rgba(0,0,0,0.2);
  }
  .container { padding: 15px; }
  h1 { font-size: 1.5em; }
  .button-group, .result-actions {
    justify-content: center;
  }
  .button-group button {
    flex-grow: 1;
  }
  .dropdown { width: 100%; }
  .dropdown-toggle { width: 100%; }
}

/* ==========================================
   11. Mejoras de Contraste para Prism en Modo Oscuro
   ========================================== */
[data-theme="dark"] .result-box pre[class*="language-"] {
    background: #2d2d2d;
    color: #ccc;
    border: 1px solid #4a637d;
}
[data-theme="dark"] .token.comment,
[data-theme="dark"] .token.prolog,
[data-theme="dark"] .token.doctype,
[data-theme="dark"] .token.cdata {
  color: #999;
}
[data-theme="dark"] .token.punctuation {
  color: #ccc;
}
[data-theme="dark"] .token.property,
[data-theme="dark"] .token.tag,
[data-theme="dark"] .token.constant,
[data-theme="dark"] .token.symbol,
[data-theme="dark"] .token.deleted {
  color: #f92672;
}
[data-theme="dark"] .token.boolean,
[data-theme="dark"] .token.number {
  color: #ae81ff;
}
[data-theme="dark"] .token.selector,
[data-theme="dark"] .token.attr-name,
[data-theme="dark"] .token.string,
[data-theme="dark"] .token.char,
[data-theme="dark"] .token.builtin,
[data-theme="dark"] .token.inserted {
  color: #a6e22e;
}
[data-theme="dark"] .token.operator,
[data-theme="dark"] .token.entity,
[data-theme="dark"] .token.url,
[data-theme="dark"] .language-css .token.string,
[data-theme="dark"] .style .token.string,
[data-theme="dark"] .token.variable {
  color: #f8f8f2;
}
[data-theme="dark"] .token.atrule,
[data-theme="dark"] .token.attr-value,
[data-theme="dark"] .token.function,
[data-theme="dark"] .token.class-name {
  color: #e6db74;
}
[data-theme="dark"] .token.keyword {
  color: #66d9ef;
}
[data-theme="dark"] .token.regex,
[data-theme="dark"] .token.important {
  color: #fd971f;
}

```

## 🎨 Funcionalidades de la App ✨ (Codigo Estilo Style.CSS):

- [✅] Define el estilo visual de la aplicación Gemini AI, asegurando una apariencia coherente y atractiva 💅.
- [✅] Establece una **paleta de colores** 🎨 con **variables CSS**, permitiendo cambiar entre modo claro ☀️ y oscuro 🌙 con facilidad.
- [✅] Realiza un **"reset"** 🧹 para una apariencia uniforme en todos los navegadores, ajustando la **fuente principal** 🔡, el fondo y el color del texto con transiciones suaves ✨.
- [✅] Da forma al **contenedor principal** 🖼️ con bordes redondeados y sombras sutiles, mejorando la estética y legibilidad.
- [✅] Estiliza el **área de texto** 📝 para que sea clara y funcional, junto con **botones** 🔘 diferenciados por colores y efectos visuales.
- [✅] Diseña la **caja de resultados** 📜 con una fuente monoespaciada 💻 y ajustes específicos para mejorar la legibilidad de texto y código resaltado 🌈.
- [✅] Define el estilo del **indicador de carga** ⏳ (ruedita giratoria ⚙️), asegurando una apariencia elegante y centrada.
- [✅] Proporciona un diseño para el botón de cambio de tema ☀️/🌙, facilitando la alternancia entre modos visuales.
- [✅] Usa **Media Queries** 📱💻 para garantizar que la aplicación sea **responsiva**, adaptándose perfectamente a distintas pantallas y dispositivos 👍.

# Project Documentation

## JavaScript (Backend - `api/generate.js`)

Este archivo se ejecuta en el **servidor** (o entorno serverless como Vercel) y actúa como intermediario seguro entre el frontend y la API de Google Gemini.

*   **Carga de Entorno:** Utiliza `require('dotenv').config()` para cargar variables de entorno (como la API Key) desde un archivo `.env` (principalmente para desarrollo local).
*   **Dependencias:** Importa `axios` para realizar llamadas HTTP a la API externa de Google.
*   **Manejo de CORS:** Define e implementa un middleware (`allowCors`) que añade las cabeceras HTTP necesarias (`Access-Control-Allow-Origin`, etc.) para permitir que el frontend (que se ejecuta en un origen diferente, como `localhost:3000`) pueda realizar peticiones a este endpoint de API sin ser bloqueado por las políticas de seguridad del navegador (CORS). También maneja las peticiones `OPTIONS` (preflight).
*   **Función Handler (`handler`):** Es la función principal que Vercel ejecutará cuando se reciba una petición en la ruta `/api/generate`.
    *   **Validación de Método:** Verifica que la petición sea de tipo `POST`.
    *   **Extracción de Datos:** Obtiene el `prompt` enviado desde el frontend en el cuerpo (`req.body`) de la petición. Valida que el prompt exista.
    *   **Acceso a API Key:** Obtiene de forma segura la `GOOGLE_API_KEY` desde las variables de entorno (`process.env`). Valida que la clave exista y devuelve un error genérico si falta, sin exponer detalles.
    *   **Llamada a la API Externa:** Construye la URL del endpoint de la API de Google Gemini. Utiliza `axios.post` para enviar el `prompt` (en el formato esperado por Google) a la API de Gemini, incluyendo la `apiKey`.
    *   **Manejo de Respuesta:** Si la llamada a Google es exitosa, envía la respuesta (`response.data`) de vuelta al frontend con un estado `200 OK`.
    *   **Manejo de Errores:** Si ocurre un error al llamar a la API de Google (ej. red, clave inválida, error de Google), captura el error (`catch`), registra detalles en la consola del servidor (`console.error`), y envía una respuesta de error JSON al frontend con un código de estado apropiado (ej. `500`, `400`) y un mensaje de error más genérico y seguro.
*   **Exportación:** Exporta la función `handler` envuelta en el middleware `allowCors` para que Vercel pueda utilizarla (`module.exports = allowCors(handler)`).
  
![Mi imagen](RECURSOS/Screenshot_341.png)

## API Implementation (api/generate.js)

```javascript

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

// ==========================================
//        EXPORTACIÓN DE LA FUNCIÓN
// ==========================================

// Finalmente, exportamos la función 'handler' pero "envuelta" con el middleware 'allowCors'.
// Esto significa que antes de que se ejecute 'handler', siempre se ejecutará primero 'allowCors'
// para asegurarse de que los permisos CORS estén configurados correctamente.
// Esto es lo que Vercel (o cualquier entorno Node.js serverless) necesita para usar esta función como un endpoint de API.
module.exports = allowCors(handler);

```

## 🧠 Funcionalidades del Backend: ✨ (api/generate.js):

Este archivo JavaScript (`api/generate.js`) es el **intermediario inteligente** 🤖 entre tu bonita interfaz web y la poderosa API de Google Gemini. Se ejecuta en el servidor (o en un entorno serverless como Vercel ✨) y realiza el trabajo pesado.

🔑 Al principio, usa `require('dotenv').config()` para cargar **variables secretas** (como tu clave API de Google) desde un archivo `.env` cuando trabajas localmente. ¡Un comentario clave nos recuerda lo importante que es esto para no exponer nuestras claves! 🤫 También importa `axios` axios , una herramienta popular para hacer llamadas a otras APIs por internet 🌐.

🛡️ Luego define `allowCors`, una función **guardiana de seguridad** muy importante. Los navegadores 🌐 tienen reglas estrictas (CORS) que impiden que tu página web llame directamente a APIs en otros dominios. `allowCors` añade las cabeceras HTTP necesarias (como `Access-Control-Allow-Origin`) para que tu frontend pueda hablar con este backend sin problemas de permisos 🚦. ¡Es como darle un pase VIP a tu interfaz!

⚙️ La función principal se llama `handler`. Actúa como un **controlador de tráfico** 🚦:

1.  Verifica que la petición del navegador sea del tipo correcto (`POST`). Si no, ¡la rechaza! 🚫
2.  Extrae la consulta (`prompt`) que el usuario escribió y se aseguró de que no esté vacía ✅.
3.  Busca de forma segura la `GOOGLE_API_KEY` en las variables de entorno. Si no la encuentra, ¡lanza un error interno sin revelar la clave! 👍
4.  Construye la URL exacta 🎯 para hablar con el modelo `gemini-1.5-flash-latest` de Google, añadiendo la clave API.

🚀 Dentro de un bloque `try...catch` (para manejar errores elegantemente 🛡️), usa `axios.post` para **enviar la consulta del usuario** (formateada como Google espera) a la API de Gemini.
*   ✅ Si Google responde con éxito, el `handler` simplemente toma la respuesta de la IA (`response.data`) y la **envía de vuelta al navegador** del usuario.
*   💥 Si algo sale mal (error de red, clave inválida, etc.), el `catch` se activa. Registra un error detallado para el desarrollador (`console.error` 🕵️‍♂️) pero envía un **mensaje de error más simple y seguro** al navegador del usuario 📨.

📦 Finalmente, `module.exports = allowCors(handler)` **empaqueta** la función `handler` con el guardián `allowCors` y la exporta, lista para ser usada por la plataforma serverless (Vercel) Vercel .


## 📦 .gitignore Configuration: Aqui en este archivo vas a Poner los Arvhivos que no 🚫 deben subirse al Github o Vercel.

![Mi imagen](RECURSOS/Screenshot_344.png)

Este archivo `.gitignore` es esencial para mantener tu repositorio limpio y libre de archivos innecesarios 🚀. En él se excluyen las **dependencias de Node.js** (`node_modules`) 📦, asegurando que el código fuente no se sobrecargue con paquetes instalados. También protege el **archivo de variables de entorno** (`.env`) 🔑, que suele contener información sensible como claves API o configuraciones privadas. Se omiten **archivos de sistema** como `.DS_Store` (macOS) y `Thumbs.db` (Windows) 🖥️, junto con **logs de depuración** (`npm-debug.log*`, `yarn-debug.log*`, `yarn-error.log*`, `*.log`) 🔍 para evitar archivos innecesarios en el historial de Git. Finalmente, se excluyen las **configuraciones locales de Vercel** (`.vercel`) 🌐, garantizando que cada desarrollador tenga su propia configuración sin afectar el repositorio principal. ¡Una herramienta clave para proyectos ordenados y eficientes! ✅
```
# Dependencias de Node.js
node_modules

# Archivo de variables de entorno local (¡MUY IMPORTANTE!)
.env

# Archivos de sistema operativo
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log

# Archivos de configuración de Vercel local
.vercel
```

## Environment Variables (.env): Copia esta Linea de Codigo en el archivo .env: Aqui va la Clave APiKey que te Dio Google AI Studio. (No Puede ser Publica)

Las **variables de entorno** `.env` son esenciales para mantener seguras y organizadas las configuraciones privadas de una aplicación 🔒. En este archivo, se debe incluir la clave API de Google AI Studio (`GOOGLE_API_KEY`) sin comillas ni espacios adicionales, asegurando que solo el entorno local pueda acceder a ella. Es **fundamental** no compartir ni exponer esta clave públicamente 🚫, ya que podría comprometer la seguridad de la aplicación. Gracias a este archivo, las credenciales y configuraciones sensibles quedan protegidas, evitando que sean subidas accidentalmente al repositorio y garantizando una gestión segura del acceso a servicios externos 🛡️.

```
# Pega tu clave API de Google aquí SIN comillas ni espacios extra
GOOGLE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Project Setup Instructions

### Inicializar npm e Instalar Dependencias: SIgue estos Pasos: En Visual Studio:

Para configurar el proyecto correctamente 🛠️ en **Visual Studio**, primero debes abrir la terminal dentro de la carpeta `mi-proyecto-ia` 📂. Luego, inicia **npm** con `npm init -y` 📝, lo que generará el archivo `package.json` automáticamente con las configuraciones por defecto. Después, instala las dependencias necesarias con `npm install axios cors dotenv` 📦. `axios` 🔗 te permitirá hacer solicitudes HTTP, `cors` 🌐 gestionará las reglas de acceso entre servidores, y `dotenv` 🔑 será esencial para manejar las variables de entorno de manera segura. Siguiendo estos pasos, tu entorno estará listo para comenzar el desarrollo 🚀.

#### Abre tu terminal en Visual Studio dentro de la carpeta mi-proyecto-ia y ejecuta los siguientes comandos:

```bash

# 1. Inicializa npm (crea package.json)
# La opción -y acepta todas las configuraciones por defecto

npm init -y

# 2. Instala las dependencias necesarias (axios, cors, dotenv)

npm install axios cors dotenv


```

### Ejecutar el Proyecto Localmente: EN la misma Terminal:

##### Ahora estás listo para probar la aplicación en tu computadora.

1. **Iniciar el Servidor de Desarrollo Vercel**

Para ejecutar el proyecto localmente 🏃‍♂️, primero asegúrate de estar en la carpeta `mi-proyecto-ia` 📂 dentro de tu terminal en **Visual Studio**. Luego, inicia el **Servidor de Desarrollo de Vercel** con el comando `vercel dev` 🚀. Esto levantará el entorno local para probar tu aplicación antes de desplegarla en producción. Con esta configuración, podrás ver los cambios en tiempo real, realizar pruebas y asegurarte de que todo funcione correctamente antes de compartir tu proyecto 🌍. ¡Listo para desarrollar! 🔥

   En tu terminal (aún dentro de la carpeta mi-proyecto-ia), ejecuta: Vercel dev

   ```bash
   
   vercel dev
   
   ```

2. **Responder a las Preguntas de Configuración (Solo la Primera Vez)**

   ##### Si es la primera vez que ejecutas vercel dev en esta carpeta, Vercel CLI necesita asociarla con tu cuenta y un proyecto (incluso para desarrollo local). Te hará algunas preguntas:

   - `? Set up and deploy "[ruta/a/tu/carpeta]"?` -> Responde con la Letra (Y) (o presiona Enter).
   - `? Which scope should contain your project?` -> Selecciona tu scope personal (tu nombre de usuario) o Simplemente presiona Enter.
   - `? Link to existing project?` -> Responde con la Letra (N) (o presiona Enter), ya que es nuevo para Vercel.
   - `? What's your project's name?` -> Presiona Enter: Si quieres Cambiar el Nombre del Proyecto Escribe un nombre válido, todo en minúsculas (ej. mi-proyecto-ia) y presiona Enter.
   - `? In which directory is your code located?` -> Presiona Enter.
   - (Si aparece) `? Want to modify these settings?` -> Responde N (o presiona Enter).

   Después de responder, Vercel guardará esta configuración en una carpeta oculta .vercel y no volverá a preguntar en futuras ejecuciones de vercel dev en esta carpeta.

3. **Acceder a la Aplicación**

   Una vez que vercel dev termine de iniciarse, verás un mensaje como:

   ```
   > Ready! Available at http://localhost:3000
   ```

   (El puerto podría ser 3001 o similar si el 3000 está ocupado).

   Abre tu navegador web y ve a la dirección indicada (ej. http://localhost:3000).

4. **Probar la Aplicación**

   - Deberías ver la interfaz web "Interactúa con Gemini".
   - Escribe una consulta en el área de texto.
   - Haz clic en "Enviar".
   - Verás el indicador "Cargando..." y, si todo es correcto, la respuesta de Gemini aparecerá en la caja de resultados.

## Captura:

![Mi imagen](RECURSOS/Screenshot_335.png)

![Mi imagen](RECURSOS/Screenshot_336.png)

![Mi imagen](RECURSOS/Screenshot_337.png)

![Mi imagen](RECURSOS/Screenshot_338.png)

![Mi imagen](RECURSOS/Screenshot_339.png)

![Mi imagen](RECURSOS/Screenshot_340.png)

5. **Detener el Servidor Local**

   Cuando termines de probar, vuelve al terminal donde se ejecuta vercel dev y presiona Ctrl + C. Confirma si te lo pide (S o Y).

## Despliegue en Vercel (Opcional)

Si quieres desplegar tu aplicación en la web 🌍, Vercel te ofrece una opción rápida y eficiente. Para hacerlo, solo necesitas ejecutar el comando `vercel deploy --prod` 🚀 en tu terminal, lo que iniciará el proceso de despliegue en producción. Luego, es **fundamental** configurar la clave API 🔑 en Vercel para garantizar que el proyecto funcione correctamente. Para ello, ve al **dashboard** de tu proyecto en Vercel, accede a `Settings -> Environment Variables` ⚙️ y agrega tu clave API. Con estos pasos, tu aplicación estará lista para ser accesible desde cualquier lugar. ¡Tu proyecto ahora vive en la nube! ☁️✨
Si deseas desplegar tu aplicación en la web:

1. Ejecuta el comando de despliegue:
   ```bash
   vercel deploy --prod
   ```

2. Configura la API Key en Vercel:
   - Ve al dashboard de tu proyecto en Vercel -> Settings -> Environment Variables

## Captura:

![Mi imagen](api_key.jpeg)
     
   - Añade una variable llamada GOOGLE_API_KEY con tu clave API como valor
   - Asegúrate de que esté disponible para Production, Preview y Development

3. Despliega: Desde tu terminal en la carpeta del proyecto, ejecuta el comando de despliegue nuevamente si es necesario.

Puedes volver a ejecutar el comando de despliegue 📤 desde tu terminal dentro de la carpeta del proyecto con `vercel deploy --prod` 🚀. Esto asegurará que los cambios recientes sean reflejados en tu aplicación en la web 🌍. Una vez que el despliegue se complete, prueba la aplicación en tu **PC o móvil** 📱💻 para verificar que todo funcione correctamente. ¡Ahora tu proyecto está en acción y listo para ser usado por cualquier persona desde cualquier dispositivo! 🎉✨

  ## Ahora Solo debe probar en tu pc o movil. 

### Los invito a entrar al **repo**, donde encontrarán la guía completa para implementar la API de Google en una interfaz personalizada. Síganla paso a paso y exploren todas sus posibilidades.

💬 No duden en dejar cualquier comentario en redes sociales, ¡me encanta conocer sus opiniones y mejoras!  
📢 Si les gustó el contenido, síganme para más guías y tutoriales sobre desarrollo y tecnología.  
🌍 Compártanlo con su comunidad para que llegue a más personas apasionadas por la innovación.  
⭐ Y no olviden dejarle una **estrellita en GitHub**, eso ayuda muchísimo a seguir creando contenido útil para todos.  

### Nos vemos en el próximo proyecto. ¡A programar se ha dicho! 😃🔥  

---

## 📡 ¡Apoya el contenido!

No olvides **suscribirte**, darle **like** y **compartir** este video para ayudarnos a seguir creando contenido como este. ¡Vamos a comenzar! 😊📡  

#RedesCisco #ProyectoDeRedes #CiscoPacketTracer 🌐💻📡  

---
## 📢 Sígueme en Redes Sociales  

1. 🎬 **YouTube**: [@JuancitoPenaV](https://www.youtube.com/channel/UCSob-3E5z4IHtMF5B4bN-FA)  
2. 👨‍💼 **LinkedIn**: [Juancito Peña](https://www.linkedin.com/in/juancitope%C3%B1a/)  
3. 📷 **Instagram**: [@juancito.pena.v](https://www.instagram.com/juancito.pena.v/)  
4. 📑 **Facebook**: [Juancito Peña V](https://www.facebook.com/juancito.p.v)  
5. 🐦 **Twitter**: [@JuancitoPenaV](https://twitter.com/JuancitoPenaV)  
