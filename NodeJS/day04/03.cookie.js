var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
//解析cookie，将其对象形式挂载req.cookies上
app.use(cookieParser());

app.get('/cookie01', function (req, res) {
  //设置cookie
  res.cookie('id', '123456', {maxAge: 1000 * 3600 * 24 * 7});
  res.send('发送cookie给你了~~~')
})

app.get('/cookie02', function (req, res) {
  //接受cookie
  // console.log(req.headers.cookie);
  // console.log(req.get('cookie'));
  // console.log(req.cookies.id);
  //删除cookie
  // res.cookie('id', '123456', {maxAge: 0});
  res.clearCookie('id');

  res.send('发送cookie给你了~~~');
})

app.listen(3000, function () {
  console.log('服务器启动成功了~~');
})