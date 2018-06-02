
(function () {
  //配置模块的路径
  requirejs.config({
    baseUrl: './',  //公共的基础路径
    paths: {   //配置引入模块的路径
      dataServer: 'modules/dataServer',  //必须省略文件的后缀名
      alerter: 'modules/alerter',
      jquery: 'libs/jquery-1.10.1'  //jquery必须全小写
    }
  });
  
  //主文件引入依赖模块，来启动项目
  //引入多个依赖的时候，他们是一一对应的关系
  requirejs(['jquery'], function ($) {
    $('#btn').click(function () {
      // 除了define函数能引入依赖，它也能通过require引入依赖
      require(['alerter'], function (alerter) {
        alerter();
      })
    })
    // $('body').html('<h1>hello AMD</h1>');
  });
})()