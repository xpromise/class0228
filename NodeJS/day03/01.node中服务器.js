//引入HTTP模块
var http = require('http');
var queryString = require('querystring');
//通过http创建服务
/*
  http.createServer() 创建服务
    - callback
      - request 请求
      - response 响应
 */
var server = http.createServer(function (request, response) {
  //获取请求的网址
  var url = request.url;
  console.log(url); // /?username=123123
  var params = url.split('?')[1];
  var query = queryString.parse(params);
  console.log(query);
  response.setHeader('Content-Type', 'text/html;charset=utf8');
  response.end('<h1>' + query.username + '</h1><p>这是服务器返回的响应</p>');
});
//通过server监听端口号
server.listen(3000, function () {
  console.log('服务器启动成功了~~~~');
})