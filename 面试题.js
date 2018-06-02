const fs = require('fs')

setTimeout(() => {
  console.log('第一次 0 毫秒后到期执行的延时定时器')
}, 0)

setTimeout(() => {
  console.log('20 毫秒后到期执行的延时定时器')
}, 20)

setTimeout(() => {
  console.log('30 毫秒后到期执行的延时定时器')
}, 30)

fs.readFile('./.', err => {
  setTimeout(() => {
    console.log('第二次 0 毫秒后到期执行的延时定时器')
  }, 0)
  console.log('完成package.json文件的读取操作')
  setImmediate(() => {
    console.log('immediate 立即回调  ')
  })
})

setImmediate(() => {
  console.log('immediate 立即回调  ')
})

process.nextTick(() => {
  console.log('process.nextTick() 的回调函数')
})

Promise.resolve()
  .then(() => {
    process.nextTick(() => {
      console.log('process.nextTick()的第二次回调')
    })
    
    console.log('Promise的第一次回调')
  })
  .then(() => {
    console.log('Promise的第二次回调')
  })