const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getTodoList: () => ipcRenderer.invoke('get-todolist'),
  addTodo: (todo) => ipcRenderer.invoke('add-todo', todo),
  // updateTodo: (id, updates) => ipcRenderer.invoke('update-todo', id, updates),
  // deleteTodo: (id) => ipcRenderer.invoke('delete-todo', id),
});

