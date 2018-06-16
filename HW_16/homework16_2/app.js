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
});


const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'Lab2',
  connectionLimit: 10
});

const userModel = require('./models/instructors')
const userTemp = require('./controllers/instructors')
const userController = userTemp(userModel, pool)

const courseModel = require('./models/course')
const courseTemp = require('./controllers/course')
const courseController = courseTemp(courseModel, pool)

// console.log(courseController.findCourseByPrice)

// Repository pattern
router.get('/instructor/find_user_by_id/:id', userController.findUserById)
router.get('/instructor/find_user_all', userController.findUserAll)
router.get('/course/find_course_by_id/:id', courseController.findCourseById)
router.get('/course/find_course_by_price/:price', courseController.findCourseByPrice)

app.use(router.routes())
app.listen(3000)