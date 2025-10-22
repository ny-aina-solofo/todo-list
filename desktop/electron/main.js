import { app, BrowserWindow,Menu,ipcMain } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { initDatabase } from '../db/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

Menu.setApplicationMenu(null);


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  })
  win.loadURL('http://localhost:5173'); 
  win.webContents.openDevTools();
  // win.loadFile('index.html')
}

app.whenReady().then(async() => {
  const db = await initDatabase();
  ipcMain.handle('get-todolist',async() => {
    const todos = await db.todolist.findAll();
    return todos.map((t) => t.toJSON())
  });
  
  ipcMain.handle('add-todo', async (_event, todo) => {
    await db.todolist.create(todo);
    return { success: true };
  });

  ipcMain.handle('update-todo', async (_event, id, updates) => {
    await db.todolist.update(updates, { where: { id } });
    const updated = await db.todolist.findByPk(id);
    return updated?.toJSON();
  });

  ipcMain.handle('delete-todo', async (_event, id) => {
    await db.todolist.destroy({ where: { id } });
    return { success: true };
  });
  
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.disableHardwareAcceleration();
