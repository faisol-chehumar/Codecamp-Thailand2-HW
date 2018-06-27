const Koa = require('koa')
const koaBody = require('koa-body')
const serve = require('koa-static')
const path = require('path')
// const cors = require('@koa/cors')
const session = require('koa-session')

const app = new Koa()
const render = require('koa-ejs')

const sessionStore = {}

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

app.keys = ['supersecret']
const sessionConfig = {
	key: 'sess',
	maxAge: 1000 * 60 * 60,
	httpOnly: true,
	store: {
		get (key, maxAge, { rolling }) {
			return sessionStore[key]
		},
		set (key, sess, maxAge, { rolling }) {
			sessionStore[key] = sess
		},
		destroy (key) {
			delete sessionStore[key]
		}
	}
}

const flash = async (ctx, next) => { // Flash middleware
	if (!ctx.session) throw new Error('flash message required session')
	ctx.flash = ctx.session.flash
	delete ctx.session.flash
	await next()
}
 
 

// function handler (ctx) {
// 	// ignore favicon
// 	if (ctx.path === '/favicon.ico') return
// 	let n = ctx.session.views || 0
// 	ctx.session.views = ++n
// 	ctx.body = `${n} views`
// }
	

// app.use(cors({
// 	// origin: 'http://example.com',
// 	allowMethods: ['GET', 'POST'],
// 	allowHeaders: ['Authorization', 'Content-Type'],
// 	maxAge: 5,
// 	credentials: true
// }))

app
	.use(session(sessionConfig, app))
	.use(flash)

	.use(koaBody({ multipart: true }))
	.use(require('./route'))

	.use(stripPrefix)
	.use(serve(path.join(__dirname, 'public')))
	// console.log(__dirname)

	.listen(8000)

