//连接数据库
require('./database/db');
//引入express模块
var express= require('express');
//引入body-parser模块
var bodyParser = require('body-parser');
//引入Users模型对象
var Users = require('./models/Users');
//创建app应用对象
var app = express();
//配置静态资源
app.use(express.static('public'));
//解析请求体，将参数挂在到req.body
app.use(bodyParser.urlencoded({extended: false}));

app.post('/login', function (req, res) {

})

app.post('/regist', function (req, res) {
  //获取用户提交的参数
  var username = req.body.username;
  var password = req.body.password;
  var rePassword = req.body.rePassword;
  var email = req.body.email;
  /*
    1. 正则验证(-)
    2. 密码和确认密码是否一致
    3. 去数据库中查找有无此用户名
    4. 插入数据
   */
  //判断密码和确认密码是否一致
  if (password !== rePassword) {
    res.send('两次密码输入不一致，请重新输入~~');
    return
  }
  //去数据库中查找有无此用户名
  Users.findOne({username: username}, function (err, data) {
    if (!err) {
      /*
        data
          如果查到了  返回文档对象
          如果没找到  返回null
       */
      if (data) {
        // 查到了指定用户名
        res.send(data.username + '用户名已被注册~~请重新输入');
      } else {
        // 没有找到指定有户名，将用户信息插入到数据库中
        Users.create({
          username: username,
          password: password,
          email: email
        }, function (err) {
          if (!err) {
            res.send('恭喜您，注册成功了~~');
          } else {
            res.send('error');
          }
        })
      }
    } else {
      res.send('error');
    }
  })



})

//监听端口号
app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})