var Router = require('koa-router');

var router = new Router();

router.get('/test01', function (ctx, next) {
  ctx.body = '返回test01响应'
})

router.use(function (ctx, next) {
  ctx.body = '返回中间件响应'
})

module.exports = router