const { detail } = require('../../repository')

const postHandler = async (ctx) => {
	console.log(ctx.params.id)
	await detail.deleteLike(ctx.session.userId, ctx.params.id)
	ctx.body = 'Unlike'
	ctx.redirect(`/pikka/${ctx.params.id}`)
}

module.exports = {
	postHandler
}
