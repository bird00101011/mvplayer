// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ps', {
  getMovies: () => ipcRenderer.invoke('getMovies'),
  setTitle: (title)=> ipcRenderer.invoke('setTitle', title),
});
