//引入express模块
var express = require('express');
//创建应用对象
/*
  我们在express中，基本上所有属性和方法都在app应用对象上
 */
var app = express();
//配置服务
/*
  路由：对某个网站节点的响应
   '/' = 'http://localhost:3000/'
   '/test'  = 'http://localhost:3000/test'
 */
app.post('/', function (req, res) {
  console.log(req.query);
  //设置响应体的信息
  res.send('<h1> ' + req.query.username + ' </h1><p>这是express服务器返回的响应</p> ');
})
//监听端口号
app.listen(80, function () {
  console.log('服务器启动成功了~~~');
})
/*
  http://localhost:3000/  网址 url地址
  http://127.0.0.1:3000/资源名
  协议名://本地域名或ip地址:端口号/

  每一个域名对应有一个ip地址

  默认端口号
    http 80
    https 443
  默认资源名
    index.html
 */