const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 400,
    height: 500,
  });
  win.loadURL(`file://${__dirname}/html/index.html`);
});