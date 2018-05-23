
// console.log(window);
// console.log(global);

/*
  global相当于window  是node中的全局对象

    setImmediate()  // 立即执行函数
    clearImmediate()

    process.nextTick()
 */

process.nextTick(function () {
  console.log('process.nextTick()');
})

setImmediate(function () {
  console.log('setImmediate()');
})

setTimeout(function () {
  console.log('setTimeout()');
}, 0)


/*
主线程到这啦~~~~
process.nextTick()
setTimeout()
setImmediate()
 */

/*
  事件轮询机制：
    timers ：计时，将回调函数塞到队列中
    pending callbacks 错误回调在这里调用 TCP嵌套字错误
    idle, prepare 准备阶段
    poll 轮询阶段
      1. 遍历回调队列，如果有回调函数取出执行，直到全部执行完或者达到系统上限
      2. 当回调队列为空时
        - setImmediate函数有没有设置过，
          如果设置过，进入check阶段
          如果没有设置过，等待下一次poll遍历，回去看定时器到点了没有，到点了就添加进来
    check 执行setImmediate的回调函数
    close callbacks close事件，调用其回调函数

    process.nextTick()  在任意阶段执行
 */

console.log('主线程到这啦~~~~');

