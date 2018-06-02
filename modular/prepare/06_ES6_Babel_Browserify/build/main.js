'use strict';

var _module = require('./module1.js');

var _module2 = require('./module2.js');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo)(); /*
                      分别暴露和统一暴露的模块需要通过解构赋值的方式引入,属性名必须一一对应
                     */

console.log(_module.name);
(0, _module2.foo1)();
(0, _module2.foo2)();

_module4.default.foo1();
_module4.default.foo2();