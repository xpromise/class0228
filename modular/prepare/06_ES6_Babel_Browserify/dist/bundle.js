(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
},{"./module1.js":2,"./module2.js":3,"./module3":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
//分别暴露
function foo() {
  console.log('module1  foo()');
}

var name = exports.name = 'atguigu';
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//统一暴露
function foo1() {
  console.log('module2  foo1()');
}

function foo2() {
  console.log('module2  foo2()');
}

exports.foo1 = foo1;
exports.foo2 = foo2;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//默认暴露，
/*
  1、一个模块只能默认暴露一个内容
  2、默认暴露引入方式不需要{}
  3、
 */

var obj = {
  foo1: function foo1() {
    console.log('module3 foo1()');
  },
  foo2: function foo2() {
    console.log('module3 foo2()');
  }
};

exports.default = obj;
},{}]},{},[1]);
