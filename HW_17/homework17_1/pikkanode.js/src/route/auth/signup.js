const { user } = require('../../repository')

const getHandler = async (ctx) => {
	// console.log('signup')
	await ctx.render('signup')
}

const postHandler = async (ctx) => {
	const { username, password } = ctx.request.body
	// TODO: validate email, password
	const userId = await user.register(username, password)
	console.log(userId)

	// TODO: handle user id ?
	ctx.body = `Email: ${username}, Password: ${password}`
}

module.exports = {
	getHandler,
	postHandler
}
