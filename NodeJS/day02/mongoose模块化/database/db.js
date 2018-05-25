/*
  用来连接数据库
 */
//引入mongoose模块
var mongoose = require('mongoose');
//连接本地数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test');
//绑定监听事件
mongoose.connection.once('open', function () {
  console.log('数据库连接成功了~~~~~~');
})
