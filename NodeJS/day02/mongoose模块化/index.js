//连接数据库
require('./database/db');
//引入模型对象
var Students = require('./models/Students');
var Users = require('./models/Users');

//对模型对象进行操作
Students.find({}, function (err, data) {
  if (!err) {
    data.forEach(function (item) {
      item.age = 30;
      item.name = '孙悟空';
      item.save(function (err) {
        if (!err) {
          console.log('数据保存成功~~~');
        }
      })
    })
  }
})