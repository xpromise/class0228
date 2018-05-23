/*
  简单文件读取：
    fs.readFile(path[, options], callback)
    - callback
      参数：
        - err
        - data 读取文件的数据
 */

var fs = require('fs');

fs.readFile('4.txt', function (err, data) {
  if (!err) {
    console.log(data); //Buffer数据
    var str = data.toString();
    console.log(str);
  }
})