const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const mysql = require('mysql2/promise')
const serve = require('koa-static')
const render = require('koa-ejs')

const app = new Koa()
const router = new Router()

const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'secret',
  database        : 'book_stroe_db'
})

app.use(serve(path.join(__dirname, 'public')))
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'ejs',
    cache: false
})

router.get('/', async ctx => {
  let staff = await pool.query('SELECT staff_firstname AS "First name", staff_lastname AS "Last name", staff_age AS "Age" FROM tbl_staff;')
  let book = await pool.query('SELECT book_isbn AS ISBN, book_title AS Title, book_price AS Price FROM tbl_book;')

  // console.log(staff[0])

  const data = {
    staff: {
      colName: Object.keys(staff[0][0]),
      rows: staff[0]
    },
    book: {
      colName: Object.keys(book[0][0]),
      rows: book[0]
    }
  }

  console.log(data)
  await ctx.render('index', data)
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)