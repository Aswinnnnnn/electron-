const { contextBridge } = require('electron');
const os = require('os');

// Expose a minimal, safe API to the renderer
contextBridge.exposeInMainWorld('system', {
  getHostname: () => os.hostname()
});