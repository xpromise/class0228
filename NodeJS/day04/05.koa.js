//引入koa模块
var Koa = require('koa');
var _ = require('koa-route');
var router = require('./router');
//创建应用对象
var app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

// app.use(_.get('/test/:id', function (ctx, next) {
//   ctx.body = '根路由返回的响应'
// }))
//中间件
// app.use(function (ctx, next) {
//   var req1 = this.request;
//   var req2 = ctx.req;
//   ctx.body = '返回响应';
// })

//监听服务
app.listen(3000, function () {
  console.log('服务器启动成功');
})