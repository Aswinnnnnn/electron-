const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Context isolation should be enabled when using contextBridge
      contextIsolation: true,
      // Keep nodeIntegration disabled in the renderer for security
      nodeIntegration: false,
      // Ensure preload has Node.js APIs available
      sandbox: false,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  })

  // Log preload errors to help diagnose issues
  win.webContents.on('preload-error', (_event, preloadPath, error) => {
    console.error('Preload error:', preloadPath, error)
  })

  win.loadURL('http://localhost:4200')
}

app.whenReady().then(() => {
  createWindow()
})