const { user } = require('../../repository')
const bcrypt = require('bcrypt')

const getHandler = async (ctx) => {
	// console.log('signup')
	await ctx.render('signup')

	console.log(ctx.session.userId)

	if (ctx.session.userId) {
		// ctx.body = 'you are not signed in'
		console.log('xx')
    return ctx.redirect('/')
  }

}

const postHandler = async (ctx) => {

	// if (ctx.session || ctx.session.userId) {
  //   // ctx.body = 'you are not signed in'
  //   return ctx.redirect('/')
  // }

	const { username, password } = ctx.request.body
	const hashedPassword = await bcrypt.hash(password, 10)
	// TODO: validate email, password
	const userId = await user.register(username, hashedPassword)
	console.log(userId)

	// TODO: handle user id ?
	ctx.body = `Email: ${username}, Password: ${hashedPassword}`
}

module.exports = {
	getHandler,
	postHandler
}
