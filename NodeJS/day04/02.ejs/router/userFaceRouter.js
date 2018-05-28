//引入express模块
var express = require('express');
//引入path模块
var path = require('path');
//获取router路由器对象
var Router = express.Router;
//创建路由器
var userFaceRouter = new Router();

userFaceRouter.get('/login', function (req, res) {
  res.render('login');
})

userFaceRouter.get('/regist', function (req, res) {
  res.render('regist', {errMsg: {}});
})


module.exports = userFaceRouter;