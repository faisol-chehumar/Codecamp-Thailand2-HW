const { detail } = require('../../../repository')

const getHandler = async (ctx) => {
	let data = await detail.getImageDetail(ctx.params.id)
	console.log(ctx.session.userId)
	console.log(ctx.params.id)
	data.isLike = await detail.isLike(ctx.session.userId, ctx.params.id)
	// ctx.body = 'detail page ' + ctx.params.id
	console.log(data)
	await ctx.render('detail', {data})
}

module.exports = {
	getHandler
}
