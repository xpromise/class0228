
var data = 'atguigu';

function doSomething() {
  console.log('doSomething() ' + data);
}

function doOtherthing() {
  console.log('doOtherthing() ' + data);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

/*
  暴露模块中的内容：
    module.exports
    exports
 */
// module.exports = {
//   doSomething: doSomething,
//   doOtherthing: doOtherthing
// }
// exports.Person = Person;
module.exports = Person;
// module.exports.doSomething = doSomething;
// module.exports.doOtherthing = doOtherthing;