/*
  import 引入模块
    分别暴露 引入模块时必须使用解构赋值方式引入
    统一暴露 引入模块时必须使用解构赋值方式引入
    默认暴露 不需要解构赋值的方法, 一个模块只能使用一个默认暴露
   import xx模块名 from 模块的路径
 */

import {foo1, foo2, msg} from './module1';
import {fn1, fn2} from './module2';
import m3 from './module3';

foo1();
foo2();
console.log(msg);
fn1();
fn2();
console.log(m3);
