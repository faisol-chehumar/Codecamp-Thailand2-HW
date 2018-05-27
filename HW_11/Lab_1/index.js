const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.variable = 'allow'
  await next()
})

router.get('/forbidden', async (ctx, next) => {
  ctx.variable = 'forbidden'
  await next()
})
 
async function middleWareOne(ctx, next) {
  console.log(ctx.variable)
  if(ctx.variable === 'allow') {
    ctx.body = 'Welcome to Westworld!'
    await next()
  }
  if(ctx.variable === 'forbidden') {
    ctx.body = 'You are not allowed'
    await next()
  }
  
}
// console.log(router.routes)
// console.log(middleWareOne(ctx, next))
app.use(router.routes())
app.use(middleWareOne)
app.use(router.allowedMethods())

app.listen(3000)