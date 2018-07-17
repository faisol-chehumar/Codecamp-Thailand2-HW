const { homeApi } = require('../repository')
// console.log(homeApi)
const getHandler = async () => {
  let data = (await homeApi.getImage())
    .map((x) => {
      return {
        id: x.id,
        caption: x.caption,
        picture: 'http://localhost:3000/-/images/' + x.id,
        createdAt: x.createdAt,
        commentCount: x.commentCount,
        likeCount: x.likeCount
      }
    })
  return data
}

module.exports = {
	getHandler
}