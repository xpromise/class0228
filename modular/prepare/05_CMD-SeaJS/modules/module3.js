/*
  定义有依赖的模块
 */
define(function (require, exports, module) {
  //同步引入模块
  const getMsg = require('./module1');
  
  let msg = getMsg();
  
  msg = msg.toUpperCase();
  
  module.exports = {
    msg
  }
  
})