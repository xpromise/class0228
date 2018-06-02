/*
  主模块，负责引入其他模块并执行
 */
define(function (require) {
  //同步引入模块
  const {foo1, foo2} = require('./modules/module1');
  //异步引入模块
  require.async('./modules/module2', function ({fn1, fn2}) {
    //let data = xxxx
    //let {fn1, fn2} = xxxx
    fn1();
    fn2();
  })
  foo1();
  foo2();
})