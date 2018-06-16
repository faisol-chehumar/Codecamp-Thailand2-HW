const getHandler = async (ctx) => {
	// ctx.body = 'sign in post handler'
	await ctx.render('signin')
}

const postHandler = async (ctx) => {
	ctx.body = 'Success! Sign in '
	console.log('user:' + ctx.request.body.username)
	console.log('password ' + ctx.request.body.password)
}

module.exports = {
	getHandler,
	postHandler
}
