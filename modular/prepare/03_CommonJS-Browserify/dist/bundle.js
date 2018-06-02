(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/*
  主模块，用来启动整个项目
    需要引入所有需要启动的模块
 */
const m2 = require('./module2');
const showData = require('./module3');

showData(m2.newsData);
showData(m2.commentsData);
},{"./module2":3,"./module3":4}],2:[function(require,module,exports){
/*
  定义一个没有依赖的模块，此模块用来定义配置常量
 */
//定义配置常量
const newsUrl = 'http://localhost:3000/news';
const commentsUrl = 'http://localhost:3000/comments';
//暴露出去
exports.newsUrl = newsUrl;
exports.commentsUrl = commentsUrl;
},{}],3:[function(require,module,exports){
/*
  定义一个有依赖的模块，需要发送请求获取数据
 */
//引入依赖
const m1 = require('./module1');

//定义发送请求的方法
function getNews(url) {
  console.log('发送请求获取数据，请求地址为：' + url);
  return 'newsData';
}
function getComments(url) {
  console.log('发送请求获取数据，请求地址为：' + url);
  return 'commentsData';
}

const newsData = getNews(m1.newsUrl);
const commentsData = getComments(m1.commentsUrl);

//暴露模块
module.exports = {
  newsData,
  commentsData
}
},{"./module1":2}],4:[function(require,module,exports){
/*
  定义一个模块，用来显示用户数据
 */
//定义显示内容的方法
function showData(data) {
  console.log('要显示的信息：' + data);
}
//暴露模块
module.exports = showData;


},{}]},{},[1]);
