require('./database/db');
var express = require('express');
var Cities = require('./models/Cities');
var app = express();
app.use(express.static('public'));

app.get('/getProvince', function (req, res) {
  Cities.find({level: 1}, function (err, data) {
    if (!err && data[0]) {
      //数据找到了，并且有值
      data = data.map(function (item) {
        return {
          name: item.name,
          province: item.province
        }
      })
      res.send({status: 'ok', list: data});
    } else {
      //数据未找到或者方法除了问题
      res.send({status: 'err'});
    }
  })
})

app.get('/getCity', function (req, res) {
  var province = req.query.province;

  Cities.find({level: 2, province: province}, function (err, data) {
    if (!err && data[0]) {
      //数据找到了，并且有值
      res.send({status: 'ok', list: data});
    } else {
      //数据未找到或者方法除了问题
      res.send({status: 'err'});
    }
  })
})

app.get('/getCounty', function (req, res) {
  var province = req.query.province;
  var city = req.query.city;

  Cities.find({level: 3, province: province, city: city}, function (err, data) {
    if (!err && data[0]) {
      //数据找到了，并且有值
      res.send({status: 'ok', list: data});
    } else {
      //数据未找到或者方法除了问题
      res.send({status: 'err'});
    }
  })
})

app.listen(3000, function () {
  console.log('服务器启动成功了~~~');
})