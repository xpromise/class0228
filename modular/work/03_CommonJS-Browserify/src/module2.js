/*
  发送请求
 */
//引入依赖模块
//解构赋值得到数据
const {newsUrl, commentsUrl} = require('./module1');

function getNews(url) {
  console.log('getNew(), 请求地址为：' + url);
  return 'newsData';
}

function getComments(url) {
  console.log('getComments(), 请求地址为：' + url);
  return 'commentsData';
}

//获取请求回来的数据
const newsData = getNews(newsUrl);
const commentsData = getComments(commentsUrl);

//暴露出去
module.exports = {
  newsData,
  commentsData
}