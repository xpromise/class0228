/*
  分别暴露和统一暴露的模块需要通过解构赋值的方式引入,属性名必须一一对应
  默认暴露可以直接声明引入，变量名可以随意指定
 */

import {foo, name} from './module1.js'
import {foo1, foo2} from './module2.js'
import m3 from './module3'

foo()
console.log(name)
foo1()
foo2()

m3.foo1()
m3.foo2()