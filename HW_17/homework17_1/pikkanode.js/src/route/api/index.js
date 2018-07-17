// api/index.js
const Router = require('koa-router')

const router = new Router()

router.use('/v1', require('./v1'))
// router.use(require('./v1/auth'))

module.exports = router.routes()
