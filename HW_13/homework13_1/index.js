const Koa = require('koa')
const Router = require('koa-router')
const render = require('koa-ejs')
const path = require('path')
const getData = require('./model/getData.js')

const app = new Koa()
const router = new Router()

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false
})

router.get('/', async ctx => {
  let results = await getData()
  let data = {
    data_1: {
      colName: Object.keys(results['query_1'][0][0]),
      rows: results['query_1'][0]
    },
    data_2: {
      colName: Object.keys(results['query_2'][0][0]),
      rows: results['query_2'][0]
    }
  }
  console.log(data.data_1.rows)
  await ctx.render('index', data)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)