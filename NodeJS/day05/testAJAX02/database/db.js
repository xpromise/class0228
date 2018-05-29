var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ajax_test');
mongoose.connection.once('open', function () {
  console.log('数据库连接成功~~·');
})