/*
  引入模块
    require('模块路径')

    路径规则：
      1. 程序员自己定义模块，称之为自定义模块，路径必须以 ./ 或者 ../ 开头
      2. 当我们通过npm下载的模块 或者 nodejs中自带的模块， 路径直接为模块名

      exports 和 module.exports:
        exports对象是对module.exports对象的引用，
        我们向exports对象添加属性或方法，本质上是向module.exports对象上添加属性或方法
      向外暴露的其实是module.exports

      什么时候该用什么呢？
        exports是module.exports的简写方式
        通常如果向外暴露简单的变量， 通常使用exports
        当我们向外暴露构造函数，通常使用module.exports
 */
var math = require('math');
var Person = require('./module01');
var m2 = require('./module02');

// new m1.Person('Bob', 18)
new Person('Bob', 18);

/*
console.log(m1);
console.log(m2); //{}

m1.doOtherthing();
m1.doSomething();

m2.doAnything();
m2.doNothing();

console.log(math.mul(10, 20));

var person = {
  boy: {

  }
}

var boy = person.boy;

person.boy.name1 = '吴杰';
boy.name2 = '吴俊杰';
boy = {
  name3: 'da俊杰'
}


console.log(boy, person.boy);
*/
