//连接数据库
require('./database/db');
//引入express模块
var express= require('express');
//引入路由器对象
var userRouter = require('./router/userRouter');
var userFaceRouter = require('./router/userFaceRouter');
//创建app应用对象
var app = express();
//配置资源目录
app.set('views', './views');
//配置模板引擎
app.set('view engine', 'ejs');
//配置静态资源
app.use(express.static('public'));
//应用路由器
app.use(userFaceRouter);
app.use(userRouter);
//监听端口号
app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})