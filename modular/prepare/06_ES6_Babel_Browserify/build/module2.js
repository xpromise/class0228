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