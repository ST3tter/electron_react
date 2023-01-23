import { app, BrowserWindow, shell, nativeTheme } from 'electron';
import { release } from 'node:os';
import { join } from 'node:path';

/*The built directory structure
├─┬ dist-electron
│ └─┬ main
│   └── index.js    > Electron-Main
├─┬ dist
│ └── index.html    > Electron-Renderer
*/
process.env.DIST_ELECTRON = join(__dirname, '../');
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist');
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, '../public')
  : process.env.DIST;

/* Disable GPU Acceleration for Windows 7 */
if (release().startsWith('6.1')) app.disableHardwareAcceleration();

/* Set application name for Windows 10+ notifications */
if (process.platform === 'win32') app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

let win: BrowserWindow | null = null;
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, 'index.html');

async function createWindow() {
  win = new BrowserWindow({
    title: 'Main Window',
    width: process.env.VITE_DEV_SERVER_URL ? 1880 : 1280,
    height: 720,
    icon: join(process.env.PUBLIC, 'favicon.ico'),
    webPreferences: {
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.setMenu(null);

  /* If the app is in dev, use the local dev url and open the dev tools */
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(url);
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }

  /* Set the theme of the application */
  nativeTheme.themeSource = 'light';

  /* Make all links open with the browser, not with the application */
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  win = null;
  if (process.platform !== 'darwin') app.quit();
});

app.on('second-instance', () => {
  if (win) {
    /* Focus on the main window if the user tried to open another one */
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
