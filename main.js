const{app, BrowserWindow} = require('electoron')
const path =require('path')
const url =require('url')

let win

function CreateWindow() {
    win = new BrowserWindow({width:800, height:600})

    window.loadURL(url.format)({

        pathname:path.join(__dirname,'index.html'),
        protocol:"file",
        slashes:true
    });
    window.onclose('closed',)
}