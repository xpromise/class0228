/*
  定义一个没有依赖的模块，此模块用来定义配置常量
 */
//定义配置常量
const newsUrl = 'http://localhost:3000/news';
const commentsUrl = 'http://localhost:3000/comments';
//暴露出去
exports.newsUrl = newsUrl;
exports.commentsUrl = commentsUrl;