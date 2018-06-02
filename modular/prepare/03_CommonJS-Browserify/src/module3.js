/*
  定义一个模块，用来显示用户数据
 */
//定义显示内容的方法
function showData(data) {
  console.log('要显示的信息：' + data);
}
//暴露模块
module.exports = showData;

