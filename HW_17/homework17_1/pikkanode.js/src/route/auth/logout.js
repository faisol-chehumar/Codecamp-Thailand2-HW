const getHandler = async (ctx) => {
	console.log('Logout')
	console.log( ctx.session.userId )
	delete ctx.session.userId
	console.log( ctx.session.userId )
	ctx.redirect('/signin')
}

const postHandler = async (ctx) => {
	delete ctx.session.userId
	ctx.redirect('/signin')
}

module.exports = {
	getHandler,
	postHandler
}
