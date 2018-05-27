const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const render = require('koa-ejs')

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  await ctx.render('index')
})

router.get('/about', async ctx => {
  await ctx.render('about')
})

// EJS initizalization
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false
 })
 

app.use(serve(path.join(__dirname, 'public')))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)