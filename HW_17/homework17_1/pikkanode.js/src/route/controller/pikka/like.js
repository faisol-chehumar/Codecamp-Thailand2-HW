const { like } = require('../../../repository')

const postHandler = async (ctx) => {
	console.log(ctx.params.id)
	await like.likeImage(ctx.session.userId, ctx.params.id)
	ctx.body = 'Liked'
	ctx.redirect(`/pikka/${ctx.params.id}`)
}

module.exports = {
	postHandler
}
