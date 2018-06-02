/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

(function (w, $) {
  let msg = 'atguigu';
  function foo1() {
    console.log('foo1()' + msg);
    $('body').css('background', 'pink');
  }
  function foo2() {
    console.log('foo2()' + msg);
  }
  
  w.fnObj = {
    foo1,
    foo2
  }
  
})(window, jQuery)

