/*
  1. 传入参数
  2. 函数内的逻辑代码
  3. 返回值
 */
function myModule () {
  // 定义数据变量
  var data = 'atguigu';

  // 写逻辑代码
  function doSomething () {
    console.log('doSomething() ' + data);
  }
  function doOtherthing () {
    console.log('doOtherthing() ' + data);
  }

  // 返回值
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}