const { home } = require('../../repository')

const getHandler = async (ctx) => {
  // ctx.body = 'detail page ' + ctx.params.id
  let data = await home.getImage()
  // console.log(data)
  await ctx.render('index', {data})
  // console.log(await home.getImage())
}

module.exports = {
	getHandler
}
