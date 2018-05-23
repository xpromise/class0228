/*
  异步写入文件：
    - 打开文件
      fs.open(path, flags[, mode], callback)
      - callback
        - 参数：
          - err 错误对象   ---  错误优先机制
            - null 程序没有错误的时候
            - 错误的具体内容 程序有错误的时候
          - fd 文件描述符
    - 写入文件
       fs.write(fd, string[, position[, encoding]], callback)
       callback
        - 参数
          err
          written 写入的字节数
          string 写入的内容
    - 关闭文件
 */
var fs = require('fs');

fs.open('2.txt', 'w', function (err, fd) {
  if (!err) {
    //程序没有出错
    fs.write(fd, '今天天气真情了', function (err, written, string) {
      if (!err) {
        console.log(written, string);
      } else {
        console.log('fs.write()方法出问题了！！！ 代码24行出问题' + err);
      }
      fs.close(fd, function (err) {
        if (!err) {
          console.log('文件关闭了');
        }
      })
    })
  } else  {
    console.log('fs.open()方法出问题了！！！ 代码21行出问题' + err);
  }
})

// console.log(fd);
