(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo1 = foo1;
exports.foo2 = foo2;
/*
  分别暴露
 */

function foo1() {
  console.log('foo1()');
}

function foo2() {
  console.log('foo2()');
}

var msg = exports.msg = 'atguigu';
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  统一暴露
 */

function fn1() {
  console.log('fn1()');
}

function fn2() {
  console.log('fn2()');
}

exports.fn1 = fn1;
exports.fn2 = fn2;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  默认暴露
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

exports.default = Person;
},{}]},{},[1]);
