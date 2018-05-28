//引入express模块
var express = require('express');
//引入Users模型对象
var Users = require('../models/Users');
//引入cookie-parser模块
var cookieParser = require('cookie-parser');
//获取router路由器对象
var Router = express.Router;
//创建路由器
var userFaceRouter = new Router();
//将cookie解析成一个对象，挂载到req.cookies上
userFaceRouter.use(cookieParser());

userFaceRouter.get('/login', function (req, res) {
  res.render('login', {errMsg: ''});
})

userFaceRouter.get('/regist', function (req, res) {
  res.render('regist', {errMsg: {}});
})

userFaceRouter.get('/userCenter', function (req, res) {
  //获取用户的id
  var id = req.cookies.id
  if (id) {
    //去数据中查找指定用户信息
    Users.findOne({_id: id}, function (err, data) {
      if (!err && data) {
        //没有问题并且找到指定用户，返回个人中心页
        res.render('userCenter', {username: data.username});
      } else {
        //出问题了或者找不到指定用户，返回登录页面
        res.redirect('/login');
      }
    })
  } else {
    res.redirect('/login');
  }
})



module.exports = userFaceRouter;