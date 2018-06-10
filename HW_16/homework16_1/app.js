const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const mysql2 = require('mysql2/promise')

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'Lab2',
  connectionLimit: 10
});


// แสดง JSON API ของ instuctor ทั้งตาราง
router.get('/instructor/find_all', async (ctx, next) => {
  const [rows] = await pool.query('SELECT * FROM instructors')
  console.log(rows)
  ctx.body = rows
  await next()
})

// รับค่า id เพื่อแสดง JSON API ของ instructor id ที่ระบุ จากตาราง instructors
router.get('/instructor/find_by_id/:id', async (ctx, next) => {
  const [rows] = await pool.query('SELECT * FROM instructors WHERE id = ?', [ctx.params.id])
  console.log(rows)
  ctx.body = rows
  await next()
})

// รับค่า id เพื่อแสดง JSON API ของ course id ที่ระบุ จากตาราง courses
router.get('/course/find_by_id/:id', async (ctx, next) => {
  const [rows] = await pool.query('SELECT * FROM courses WHERE id = ?', [ctx.params.id])
  console.log(rows)
  ctx.body = rows
  await next()
})

// รับค่า price เพื่อแสดง JSON ของ price ที่ระบุจากตาราง courses
router.get('/course/find_by_price/:price', async (ctx, next) => {
  const [rows] = await pool.query('SELECT courses.name FROM courses WHERE courses.price = ?', [ctx.params.price])
  console.log(rows)
  ctx.body = rows
  await next()
})



// แสดง JSON API ของ instuctor ทั้งตาราง
// router.get('/instructor/find_all', async (ctx, next) => {
//     const [rows] = await pool.query('SELECT * from instructors WHERE id = ?',[ctx.params.id])
//     ctx.body = rows
//     await next()
// })

app.use(router.routes())
app.listen(3000)