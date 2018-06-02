/*
  定义有依赖的模块
    define([引入的模块1], funcion (模块1) {})
 */

define(['dataServer', 'jquery'], function (dataServer, $) {
  console.log('alerter模块执行了~~~~');
  const msg = dataServer();
  
  function alertData() {
    $('body').css('background', 'pink');
    alert(msg);
  }
  
  return alertData;
})