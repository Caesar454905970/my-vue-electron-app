// main.js

// Modules to control application life and create native browser window
// @ts-ignore
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  })
  // //根据npm run :后面输入的参数进行判断
  // console.log("process.env.npm_lifecycle_ent",process.env.npm_lifecycle_ent)
  // if(process.env.npm_lifecycle_ent ==="dev"){
  //   //如果是调试，先运行web端口，客户端打开对用的地址页面
  //   mainWindow.loadURL('http://localhost:3000').then( )
  // }else{
  //   //如果是打包 先打包web(vite文件之后)再去打包应用
  //   mainWindow.loadFile('./dist/index.html')
  // }

  //打包时使用
  // mainWindow.loadFile('dist/index.html')
  //开发使用
  mainWindow.loadURL('http://localhost:3000').then( )

  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  const { app, protocol } = require('electron')

  //注册文件协议
    protocol.registerFileProtocol('files', (request, callback) => {
      const url = request.url.substr(8)
      let path=decodeURI(url.split('?')[0])
      callback({ path })
    })


  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。