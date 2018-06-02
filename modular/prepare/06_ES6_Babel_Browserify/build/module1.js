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