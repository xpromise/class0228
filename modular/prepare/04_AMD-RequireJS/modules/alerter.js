/*
  定义有依赖的模块
    define([依赖的模块1, 依赖的模块2...], function (依赖的模块1暴露内容, 依赖的模块2暴露内容...) {})
    
 */
define(['dataServer', 'jquery'], function (dataServer, $) {
  let name = 'sunwukong';
  
  function showMsg() {
    $('body').css('background', 'pink');
    alert(dataServer.getMsg() + ' ' + name);
  }
  //通过return暴露模块的内容
  return {showMsg};
})