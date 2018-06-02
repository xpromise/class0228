/*
  主模块，用来启动整个项目
    需要引入所有需要启动的模块
 */
const m2 = require('./modules/module2');
const showData = require('./modules/module3');

showData(m2.newsData);
showData(m2.commentsData);