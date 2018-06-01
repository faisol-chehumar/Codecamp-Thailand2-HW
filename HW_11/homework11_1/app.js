const mysql = require('mysql2/promise')
const Koa = require('koa')
const Router = require('koa-router')
const render = require('koa-ejs')
const path = require('path')

const app = new Koa()
const router = new Router()


const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'secret',
  database        : 'codecamp'
})


render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cach: false
})

router.get('/', async (ctx) => {
  const result = await pool.query('SELECT * FROM users;')
  const data = {
    key: Object.keys(result[0][0]),
    rows: result[0]
  }
  console.log(data.rows)
  await ctx.render('index', data)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
