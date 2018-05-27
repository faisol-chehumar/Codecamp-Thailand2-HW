const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const render = require('koa-ejs')
const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)

const app = new Koa()
const router = new Router()

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false
})

router.get('/', async ctx => {
  // let data = {}
  let data = JSON.parse((await readFile('public/data/data.json')))
    // .map((person, i) => {
    //   data['person_' + i] = person
    // })
  const result = {data:data}
  console.log(result)
  await ctx.render('index', result)
})


router.get('/contact', async ctx => {
  await ctx.render('contact')
})
router.get('/skill', async ctx => {
  await ctx.render('skill')
})

router.get('/portfolio', async ctx => {
  await ctx.render('portfolio')
})




app.use(serve(path.join(__dirname, 'public')))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)