
function module() {
  //定义数据
  var data = 'atguigu';
  //写代码逻辑
  function doSomething() {
    console.log('doSomething() ' + data);
  }
  function doOtherthing() {
    console.log('doOtherthing() ' + data);
  }
  //返回值
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}