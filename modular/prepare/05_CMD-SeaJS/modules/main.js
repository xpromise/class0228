/*
  主模块，负责引入其他模块
    主模块通常没有暴露，只需要引入其他模块即可
 */
define(function (require) {
  const m3 = require('./module3');
  require('./module4');
  
  console.log(m3.msg);
})