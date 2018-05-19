/*
  1. 传入参数
  2. 函数内的逻辑代码
  3. 返回值
 */
(function (window) {
  // 定义数据变量
  var d = 'atguigu';

  // 写逻辑代码
  function x () {
    console.log('doSomething() ' + d);
  }
  function y () {
    console.log('doOtherthing() ' + d);
  }

  window.module = {
    doSomething: x,
    doOtherthing: y
  }
})(window)