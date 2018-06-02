/*
  定义有依赖的模块
 */
define(function (require, exports, module) {
  //异步引入模块
  require.async('./module2', function (m2) {
    console.log(m2.msg1, m2.msg2);
  })
  console.log('module4执行了~~~');
})