/*
  通过define函数定义模块
 */
define(function (require, exports, module) {
  /*
    require 引入依赖模块
    exports 暴露模块
    module 暴露模块
   */
  function fn1() {
    console.log('fn1()');
  }
  function fn2() {
    console.log('fn2()');
  }
  
  module.exports = {
    fn1,
    fn2
  }
  
})