const { app, BrowserWindow,Menu } = require('electron/main')
const path = require('path')
const isDev = !app.isPackaged

Menu.setApplicationMenu(false);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  
  // win.loadFile(path.join(__dirname, './renderer/index.html'))
  if (isDev) {
    // pendant le dev : démarre le serveur Vite et charge le port 5173
    win.loadURL('http://localhost:5173')
  } 
}

app.whenReady().then(async() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.disableHardwareAcceleration();
