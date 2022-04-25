// 在上下文隔离启用的情况下使用预加载
const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ipcRender', ipcRenderer)