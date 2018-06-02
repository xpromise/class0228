/*
  定义没有依赖的模块
    通过define方法定义模块
 */

define(function () {
  console.log('dataServer模块执行了~~~~');
  const msg = 'atguigu';
  
  function getMsg() {
    return msg.toUpperCase();
  }
  //通过return定义暴露模块的数据
  return getMsg
})