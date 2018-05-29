var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/testAJAX', function (req, res) {
  res.send('接受ajax请求返回响应');
})

app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})