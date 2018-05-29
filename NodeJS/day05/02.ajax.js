var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.post('/testAJAX', function (req, res) {
  console.log(req.body);
  res.send('接受ajax请求返回响应');
})

app.get('/testAJAX', function (req, res) {
  console.log(req.query);
  res.send('接受ajax请求返回响应');
})

app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})