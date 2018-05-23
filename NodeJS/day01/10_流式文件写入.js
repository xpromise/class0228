
/*
  fs.createWriteStream(path[, options])
    - path 文件路径
    - options 可选值
      - flags <string>
        encoding <string>
        fd <integer>
        mode <integer>
        autoClose <boolean>  是否自动关闭 默认值true
        start <integer>  写入文件的起始位置 默认值 0
 */
var fs = require('fs');

var ws = fs.createWriteStream('4.txt');

ws.once('open', function () {
  console.log('文件打开了');
})
ws.once('close', function () {
  console.log('文件关闭了');
})

ws.write('锄禾日当午');
ws.write('汗滴禾下土');
ws.write('谁知盘中餐');
ws.write('粒粒皆辛苦');

// ws.close();
ws.end();
