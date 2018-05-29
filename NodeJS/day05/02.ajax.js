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

app.get('/jsonp', function (req, res) {
  var callback = req.query.callback;

  var data = {
    name: '吴杰',
    age: 18
  }
  data = JSON.stringify(data);
  //jsonp
  //json with padding
  var cb = callback + '(' + data + ')';

  console.log(cb); // getData({"name":"吴杰","age":18})
  res.send(cb);
})

app.get('/cors', function (req, res) {
  // res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  res.send('cors的响应~~~');
})

app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})