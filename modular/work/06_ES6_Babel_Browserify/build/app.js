'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo1)(); /*
                       import 引入模块
                         分别暴露 引入模块时必须使用解构赋值方式引入
                         统一暴露 引入模块时必须使用解构赋值方式引入
                         默认暴露 不需要解构赋值的方法
                        import xx模块名 from 模块的路径
                      */

(0, _module.foo2)();
console.log(_module.msg);
(0, _module2.fn1)();
(0, _module2.fn2)();
console.log(_module4.default);