/*
  引入模块
    require('模块路径')

    路径规则：
      1. 程序员自己定义模块，称之为自定义模块，路径必须以 ./ 或者 ../ 开头
      2. 当我们通过npm下载的模块 或者 nodejs中自带的模块， 路径直接为模块名

      exports 和 module.exports

 */
var math = require('math')
var m1 = require('./module01');
var m2 = require('./module02');

m1.doOtherthing();
m1.doSomething();

m2.doAnything();
m2.doNothing();

console.log(math.mul(10, 20));