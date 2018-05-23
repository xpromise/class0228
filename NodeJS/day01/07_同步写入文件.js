/*
  同步写入文件：
    - 打开文件
      fs.openSync(path, flags[, mode])
        - path 要打开文件的路径
        - flags 对文件执行的操作 'r' 'w' 'a'
        - mode 可选值，默认值：0o666  文件权限可读可写
            0o111 文件的可执行权限
            0o222 文件的可写权限
            0o444 文件的可读取权限
            0o666 文件的可读可写权限
            0o777 文件的可执行可读可写权限
         - 返回值
            fd 文件描述符，number 唯一的
    - 写入文件
      fs.writeSync(fd, string[, position[, encoding]])
        - fd 要写入文件的文件描述符
        - string 写入的内容
        - position 写入内容起始位置，默认值：0
        - encoding 写入的编码方式
        - 返回值：写入内容的字节数
    - 关闭文件
      fs.closeSync(fd)
        - fd 要关闭文件的文件描述符
 */
var fs = require('fs');

var fd = fs.openSync('1.txt', 'w', 0444);

var data = fs.writeSync(fd, '呵呵呵呵哒');
console.log(data);

fs.closeSync(fd);

