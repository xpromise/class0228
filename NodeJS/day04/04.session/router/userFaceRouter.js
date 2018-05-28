//引入express模块
var express = require('express');
//引入Users
var Users = require('../models/Users');
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
  var userId = req.session.userId;
  console.log(userId);
  if (userId) {
    Users.findOne({_id: userId}, function (err, data) {
      if (!err && data) {
        res.render('userCenter', {username: data.username});
      } else {
        res.redirect('/login');
      }
    })
  } else {
    res.redirect('/login');
  }
})



module.exports = userFaceRouter;