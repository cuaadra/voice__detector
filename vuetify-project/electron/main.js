const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // Això permet que el teu codi de Vue pugui parlar amb Electron
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  // Si estem en desenvolupament, carreguem la URL de Vite
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Si és producció, carreguem el fitxer compilat
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

app.whenReady().then(createWindow)

// Tancar l'app quan totes les finestres es tanquin (típic de Windows)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})