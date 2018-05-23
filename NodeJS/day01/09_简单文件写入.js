
var fs = require('fs');

var str= '';

for (var i = 0; i < 1000000; i++) {
  str += 'o(ﾟДﾟ)っ啥！'
}

var buf = Buffer.from(str)

fs.writeFile('3.txt', buf, {flag: 'w'}, function (err) {
  if (!err) {
    console.log('文件写入成功');
  }
})
