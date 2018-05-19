/*
  分线程执行js
 */
function fibonacci(num) { //递归调用
  return num <= 2 ? 1 : fibonacci(num-1) + fibonacci(num-2)
}
//分线程接受主线程的消息
var onmessage = function (ev) {
  var number = ev.data
  console.log('分线程接受主线程的消息: ' + number)
  //处理数据，得到结果
  var result = fibonacci(number)
  //分线程向主线程发送结果数据
  postMessage(result)
  console.log('分线程向主线程发送结果数据: ' + result)
}