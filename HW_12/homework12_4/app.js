const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const render = require('koa-ejs')
const addData = require('./server/updateStaff')

const app = new Koa()
const router = new Router()

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false
})


router.get('/', async (ctx, next) => {
  await ctx.render('index')
})

router.get('/add', async (ctx, next) => {
  await addData.updateStaff()
  await ctx.render('insert')
})

app.use(serve(path.join(__dirname, 'public')))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)