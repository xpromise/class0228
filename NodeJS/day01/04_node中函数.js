/*
  node中的函数：
    function (exports, require, module, __filename, __dirname) {}
    - exports 暴露模块
    - require 引入模块
    - module module.exports 暴露模块
    - __filename 文件的完整路径 绝对路径
    - __dirname 文件的目录路径
 */
console.log(this); //{}
console.log(arguments.callee.toString());

console.log(__filename);  // C:\Users\web\Desktop\class0228\NodeJS\day01\04_node中函数.js
console.log(__dirname); // C:\Users\web\Desktop\class0228\NodeJS\day01