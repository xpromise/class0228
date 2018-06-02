/*
  通过define函数定义模块
 */
define(function (require, exports, module) {
  /*
    require 引入依赖模块
    exports 暴露模块
    module 暴露模块
   */
  function foo1() {
    console.log('foo1()');
  }
  function foo2() {
    console.log('foo2()');
  }
  
  exports.foo1 = foo1;
  exports.foo2 = foo2;
})