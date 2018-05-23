
var data = 'atguigu';

function doSomething() {
  console.log('doSomething() ' + data);
}

function doOtherthing() {
  console.log('doOtherthing() ' + data);
}

/*
  暴露模块中的内容：
    module.exports
    exports
 */
module.exports = {
  doSomething: doSomething,
  doOtherthing: doOtherthing
}