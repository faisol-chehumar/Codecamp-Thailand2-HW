const Router = require('koa-router')

const home = require('./home')
const create = require('./create')
const detail = require('./detail')
const comment = require('./comment')
const like = require('./like')
const search = require('./search')

const router = new Router()

router.get('/', home.getHandler)
router.get('/create', create.getHandler)
router.post('/create', create.postHandler)
router.get('/pikka/:id', detail.getHandler)
router.post('/pikka/:id/comment', comment.postHandler)
router.post('/pikka/:id/like', like.postHandler)
router.post('/seach', search.postHandler)

module.exports = router.routes()
