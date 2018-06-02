/*
  定义没有依赖的模块
    require.js（AMD模块化规范）中定义模块是通过define函数定义
 */
define(function () {
  let msg = 'atguigu';
  
  function getMsg() {
    return msg.toUpperCase();
  }
  
  return {getMsg}
})