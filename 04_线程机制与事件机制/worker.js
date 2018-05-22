function fibonacci(num) {
  return num <= 2 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}

//分线程接受主线程消息
var onmessage = function (ev) {
  console.log(ev);
  //获取主线程推送过来的数据
  var data = ev.data;
  //计算得出返回值
  var result = fibonacci(data);
  //分线程通知主线程
  postMessage(result);
}