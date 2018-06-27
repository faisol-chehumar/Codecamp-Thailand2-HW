const { signin } = require('../../repository')
const bcrypt = require('bcrypt')
// const session = require('koa-session')

const getHandler = async (ctx) => {
	// ctx.body = 'sign in post handler'
	let data = {
		flash: ctx.flash
	}

	console.log(ctx.session.userId)

	if (ctx.session.userId) {
		// ctx.body = 'you are not signed in'
		console.log('xx')
    return ctx.redirect('/')
  }

	await ctx.render('signin', data)
}

const postHandler = async (ctx) => {
	const user = await signin.getUser(ctx.request.body.username)
	// console.log(hashedPassword)
	// ctx.body = 'Success! Sign in '
	// console.log('user:' + ctx.request.body.username)
	// console.log('password ' + ctx.request.body.password)
	
	if(user.length === 0) {
		ctx.status = 401 // Unauthorized
		ctx.session.flash = { error: 'Username is invalid' }
		return ctx.redirect('/signin')
	}
	
	// console.log('hash:' + user[0].password)
	// console.log('ctx; ' + ctx.request.body.password)
	const same = await bcrypt.compare(ctx.request.body.password, user[0].password)
	if (!same) {
		ctx.session.flash = { error: 'Wrong password' }
		return ctx.redirect('/signin')
	}
	ctx.body = 'Success! Sign in '
	ctx.session.userId = user[0].id

	// console.log(checkAuth())



	ctx.redirect('/')
}


module.exports = {
	getHandler,
	postHandler
}
