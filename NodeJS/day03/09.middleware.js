//引入express模块
var express = require('express');
var bodyParser = require('body-parser');
//创建应用对象
var app = express();
/*
  中间件，
    应用级中间件：当我们将中间件放在最上面，默认接受所有请求
    第三方中间件：用来解析request数据
    路由级中间件: 路由器中间件
    错误处理中间件： 用来处理错误
    内置中间件：配置静态资源
 */
//配置静态资源
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  console.log('中间件被执行了~~~');
  res.set('Content-type', 'text/html;charset=utf8');
  next();
});

function middleWare(req, res, next) {
  if (req.quert.username) {
    next();
  } else {
    res.redirect('/login');
  }
}

app.get('/login', middleWare, function (req, res, next) {
  console.log('根路由被执行了~~~');
  res.send('返回响应');
})
app.get('/test', function (req, res, next) {
  console.log('test get路由被执行了~~~');
  res.send('get返回响应');
})
app.post('/test', function (req, res) {
  // console.log(req.query);  //{}
  console.log(req.body);  //undefined  { username: 'sunwukong', password: '123123' }
  console.log('test post路由被执行了~~~');
  res.send('post返回响应');
})
//错误处理中间件, 用来错误用户输入的错误url地址
app.use(function (req, res) {
  res.send('error');
})
//监听端口号
app.listen(3000, function () {
  console.log('服务器启动成功~~');
})