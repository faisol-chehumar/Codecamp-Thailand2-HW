const Koa = require('koa')
const koaBody = require('koa-body')
const serve = require('koa-static')
const path = require('path')

const app = new Koa()
const render = require('koa-ejs')

const stripPrefix = async (ctx, next) => {
	if (!ctx.path.startsWith('/-')) {
		ctx.status = 404
		return
	}

	ctx.path = ctx.path.slice(2)
	await next()
}

render(app, {
	root: path.join(__dirname, 'views'),
	layout: 'template',
	viewExt: 'ejs',
	cache: false
})

app.use(koaBody({ multipart: true }))
app.use(require('./route'))

app.use(stripPrefix)
app.use(serve('public'))

app.listen(8000)
