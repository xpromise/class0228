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