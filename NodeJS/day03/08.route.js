//引入express模块
var express = require('express');
//创建一个应用对象
var app = express();
//定义路由
/*
  路由由三部分组成：
    HTTP请求: get/post/all
    URI: path路径
    若干个句柄: 回调函数
      request 请求报文
      response 响应报文
 */
app.get('/', function (req, res) {
  /*
    req.params  获取:id请求参数
    req.query   获取查询字符串
    req.headers  获取的请求头
    req.get()   获取请求头指定属性的值
   */
  // console.log(req.query);  // { username: 'sunwukong', password: '123123' }
  // console.log(req.headers);
  /*
  { host: 'localhost:3000',
    connection: 'keep-alive',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,* /*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9',
      cookie: 'Webstorm-129da853=8726c2d8-3b88-48b8-8db0-dd82e62fb79a',
      'if-none-match': 'W/"bc-1639239dc0d"',
      'if-modified-since': 'Thu, 24 May 2018 12:57:35 GMT' }
   */

  // console.log(req.get('user-agent'));
  console.log('跟路由调用了');
  res.send('根路由的响应');
})
app.get('/test', function (req, res) {
  /*
    res.get()  获取响应头信息
    res.set()  设置响应头信息
    res.download()  客户端自动下载指定的资源
    res.sendFile()  客户端直接接受文件显示  需要是绝对路径
    res.redirect()
    res.send()
    res.status()
   */
  // res.set('Content-Type', 'text/html;charset=utf8');
  // console.log(res.get('Content-Type'));

  // res.download('./index.html');
  // res.sendFile('index.html', {
  //   root: __dirname
  // }, function (err) {
  //   if (!err) {
  //     console.log('发送成功~~~');
  //   }
  // });
  // res.sendFile(__dirname + '/index.html');

  // res.status(500);
  // res.send('服务器返回的响应');
  console.log('/test路由响应了');
  res.redirect('/');
})

app.get('/goods/:id', function (req, res) {
  console.log(req.params);
  res.send('服务器返回响应');
})
//   /user/123456
app.get(/^\/user\/(\d+)$/, function (req, res) {
  console.log(req.params);
  res.send('正则服务器返回响应')
})
//监听端口号
app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})