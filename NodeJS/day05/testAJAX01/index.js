var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/testAJAX', function (req, res) {
  //返回验证码
  setTimeout(function () {
    res.send('12306');
  }, 10000)
})

app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})