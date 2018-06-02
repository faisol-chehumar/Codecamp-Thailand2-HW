const Koa = require('koa')
const Router = require('koa-router')
// const {promisify} = require('util')
// const fs = require('fs')
// const readFile = promisify(fs.readFile)
const fromDatabase = require('./model/from_database.js')
const fromFile = require('./model/from_file.js')



const app = new Koa()
const router = new Router()


// connect DB

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello Dolores!'
})

router.get('/from_database', async (ctx, next) => {
  const result = await fromDatabase.getDataFromDb()
  ctx.result = result[0] 
  await next()
})

router.get('/from_file', async (ctx, next) => {
  let dataJson = await fromFile.getDataFromFile()
  ctx.result = JSON.parse(dataJson)
  await next() 
})

async function setAdditionData(ctx, next) {
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() < 10 ? '0' + today.getMonth() : today.getMonth()
  let date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
  let hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours()
  let minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
  let seconds = today.getSeconds()

  let dateTime = `${year}-${month}-${date} ${hours}-${minutes}-${seconds}`

  let additionData = {
    data: ctx.result,
    additionalData: {
      userId: 1,
      dateTime: dateTime
    }
  }
  ctx.body = additionData
  await next()
}

app.use(router.routes())
app.use(setAdditionData)
app.use(router.allowedMethods())

app.listen(3000)
