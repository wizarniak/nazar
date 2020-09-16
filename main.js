const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })

  // load the index.html of the app
  win.loadFile('index.html');

  // Open DevTools
  win.webContents.openDevTools()
}

// called when Electron has finished intializationa nd is ready to create 
// browser windows
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, recreate a window in the app when the dock icon is clicked and 
  // there are no other windows open
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

