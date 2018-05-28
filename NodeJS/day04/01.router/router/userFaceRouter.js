//引入express模块
var express = require('express');
//引入path模块
var path = require('path');
//获取router路由器对象
var Router = express.Router;
//创建路由器
var userFaceRouter = new Router();

userFaceRouter.get('/login', function (req, res) {
  var absolutePath = path.resolve(__dirname, '../', 'public/login.html');
  console.log(absolutePath); // C:\Users\web\Desktop\class0228\NodeJS\day04\01.router\public\login.html
  res.sendFile(absolutePath);
})

userFaceRouter.get('/regist', function (req, res) {
  var absolutePath = path.resolve(__dirname, '../', 'public/regist.html');
  console.log(absolutePath); // C:\Users\web\Desktop\class0228\NodeJS\day04\01.router\public\login.html
  res.sendFile(absolutePath);
})


module.exports = userFaceRouter;