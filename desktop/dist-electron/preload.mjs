"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  getTodoList: () => electron.ipcRenderer.invoke("get-todolist"),
  addTodo: (todo) => electron.ipcRenderer.invoke("add-todo", todo),
  updateTodo: (id, updates) => electron.ipcRenderer.invoke("update-todo", id, updates),
  deleteTodo: (id) => electron.ipcRenderer.invoke("delete-todo", id)
});
