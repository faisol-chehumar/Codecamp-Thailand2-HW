const { comment } = require('../../../repository')

const postHandler = (ctx) => {
	// console.log(ctx.request.body.comment)
	// console.log(ctx.params.id)
	comment.commentImage(ctx.request.body.comment, ctx.params.id, ctx.session.userId)
	ctx.body = 'Comment Success!'
	ctx.redirect(`/pikka/${ctx.params.id}`)
}

module.exports = {
	postHandler
}
