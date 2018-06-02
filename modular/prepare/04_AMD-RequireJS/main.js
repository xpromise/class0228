(function () {
  requirejs.config({
    //定义模块的基本路径
    baseUrl: './',
    paths: {
      jquery: 'lib/jquery-1.10.1',
      dataServer: 'modules/dataServer',
      alerter: 'modules/alerter'
    }
  })
  //加载模块并调用
  requirejs(['alerter'], function (alerter) {
    alerter.showMsg();
  })
})()