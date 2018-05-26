//引入express模块
var express = require('express');
//创建应用对象
var app = express();
//配置服务
app.get('/', function (req, res) {
  console.log(req.query);
  res.send('<h1> ' + req.query.username + ' </h1><p>这是express服务器返回的响应</p> ');
})
//监听端口号
app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})