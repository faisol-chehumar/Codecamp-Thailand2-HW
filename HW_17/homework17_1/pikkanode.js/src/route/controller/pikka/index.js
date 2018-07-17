const Router = require('koa-router')

const home = require('./home')
const create = require('./create')
const detail = require('./detail')
const comment = require('./comment')
const like = require('./like')
const unlike = require('./unlike')
const search = require('./search')
// const checkAuth = require('../../../service/checkAuth')
// const checkAuth = async (ctx, next) => {
//   if (!ctx.session || !ctx.session.userId) {
//     ctx.body = 'you are not signed in'
//     return
//   }
//   await next()
// }

const router = new Router()

router.get('/', home.getHandler)
router.get('/create', create.getHandler)
router.post('/create', create.postHandler)
router.get('/pikka/:id', detail.getHandler)
router.post('/pikka/:id/comment', comment.postHandler)
router.post('/pikka/:id/like', like.postHandler)
router.post('/pikka/:id/unlike', unlike.postHandler)
router.post('/seach', search.postHandler)

// router.get('/', checkAuth.checkAuth, home.getHandler)
// router.get('/create', checkAuth.checkAuth, create.getHandler)
// router.post('/create', checkAuth.checkAuth, create.postHandler)
// router.get('/pikka/:id', checkAuth.checkAuth, detail.getHandler)
// router.post('/pikka/:id/comment', checkAuth.checkAuth, comment.postHandler)
// router.post('/pikka/:id/like', checkAuth.checkAuth, like.postHandler)
// router.post('/pikka/:id/unlike', checkAuth.checkAuth, unlike.postHandler)
// router.post('/seach', checkAuth.checkAuth, search.postHandler)



module.exports = router.routes()
