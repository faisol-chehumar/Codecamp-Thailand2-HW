const Koa = require('Koa')
const app = new Koa()

app.use((ctx) => {
  ctx.set('Content-Type', 'text/plain; charset=utf-8')
  ctx.set('Cache-Control', 'private, max-age=0')
  ctx.body = '<h1>Hello World</h1>' 
})

app.listen(3000)

