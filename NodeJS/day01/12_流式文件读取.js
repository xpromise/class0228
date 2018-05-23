/*
  流式文件读取：
    fs.createReadStream(path[, options])
 */
var fs = require('fs');
var rs = fs.createReadStream('C:\\Users\\web\\Desktop\\imyours.mp3');
var ws = fs.createWriteStream('1.mp3');

rs.once('open', function () {
  console.log('可读流打开了');
})

rs.once('close', function () {
  console.log('可读流关闭了');
  ws.end();
})

ws.once('open', function () {
  console.log('可写流打开了');
})

ws.once('close', function () {
  console.log('可写流关闭了');
})

rs.on('data', function (data) {
  // console.log(data.length); // 65536 / 1024 = 64kb
  ws.write(data);
})