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