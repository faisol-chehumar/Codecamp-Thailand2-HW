const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const mysql2 = require('mysql2/promise')
const render = require('koa-ejs')
const path = require('path')

render(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'ejs',
    cache: false
})


const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'Lab2',
  connectionLimit: 10
})

const instructorModal = require('./models/instructors')(pool)
const courseModel = require('./models/courses')(pool)

// Repository pattern
router.get('/instructors/find_all', async (ctx) => {
  let data = (await instructorModal.findAll())
    .map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        created_at: obj.created_at 
      }
    })
  
  await ctx.render('index', {
    data: data
  })
})

router.get('/instructors/find_instructor_by_id/:id', async (ctx) => {
  let data = await instructorModal.findById(ctx.params.id)
  await ctx.render('index', {
    data: {
      id: data.id,
      name: data.name,
      created_at: data.created_at
    }
  })
})

router.get('/courses/find_course_by_id/:id', async (ctx) => {
  let data = await courseModel.findById(ctx.params.id)
  await ctx.render('index', {
    data: {
      id: data.id,
      name: data.name,
      created_at: data.created_at
    }
  })
})

router.get('/courses/find_course_by_price/:price', async (ctx) => {
  let data = (await courseModel.findByPrice(ctx.params.price))
    .map(dataCourse => {
      return {
        id: dataCourse.id,
        name: dataCourse.name,
        created_at: dataCourse.created_at
      }
    })
  
  await ctx.render('index', {
    data: data
  })
})


app.use(router.routes())
app.listen(3000)