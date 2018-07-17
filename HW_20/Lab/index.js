const Koa = require('koa')
const Router = require('koa-router')
// const serve = require('koa-static')
const render = require('koa-ejs')
const path = require('path')

const app = new Koa()
const router = new Router()



router.get('/', async ctx => {
  await ctx.render('index')
})

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)