/*
  显示数据
 */
//引入模块
const {newsData, commentsData} = require('./module2');

function showData(data) {
  console.log('showData() ：' + data);
}

showData(newsData);
showData(commentsData);


