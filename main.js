const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs')

function createWindow() {
  ipcMain.handle('getMovies', async () => {
    return getMovies()
  })
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),

      webSecurity: false,
      allowRunningInsecureContent: true,
      contextIsolation: true,
      nodeIntegration: true
    }
  });

  const startUrl = process.env.ELECTRON_START_URL || `file://${path.join(__dirname, 'dist/index.html')}`;
  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);

const videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.flv', '.webm'];

async function getMovies() {
  let args = process.argv.slice(1);
  if (args && args.length > 0) {
    const filePath = args[0];

    let files = fs.readdirSync(path.dirname(filePath));
    let ms = files.filter(file => {
      let ext = path.extname(file).toLowerCase();
      return videoExtensions.includes(ext)
    }).map(ff => {
      return {
        path: path.resolve(ff), name: path.parse(ff).name
      }
    })

    return JSON.stringify(ms)
  }
  dialog.showMessageBox({
    type: 'info',
    title: '温馨提示',
    message: '该文件夹下没有视频文件',
    buttons: []
  });
  return JSON.stringify([])
}