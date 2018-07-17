const { search } = require('../../../repository')

const postHandler = async (ctx) => {
  // console.log(ctx.request.body.search)
  let data = await search.searchCaption(ctx.request.body.search)
  // console.log(data)
  await ctx.render('search', {data})
  // ctx.redirect('/')
}

module.exports = {
	postHandler
}
