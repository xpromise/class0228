//引入express模块
var express = require('express');
//引入path模块
var path = require('path');
//获取router路由器对象
var Router = express.Router;
//创建路由器
var userFaceRouter = new Router();

userFaceRouter.get('/login', function (req, res) {
  res.render('login', {errMsg: ''});
})

userFaceRouter.get('/regist', function (req, res) {
  res.render('regist', {errMsg: {}});
})

userFaceRouter.get('/userCenter', function (req, res) {
  res.render('userCenter');
})



module.exports = userFaceRouter;