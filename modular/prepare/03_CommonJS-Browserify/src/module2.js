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