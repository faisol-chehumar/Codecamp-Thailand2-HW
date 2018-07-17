const Router = require('koa-router')

const signIn = require('./signin')
const signUp = require('./signup')
const logout = require('./logout')

// const checkAuth = require('../../../service/checkAuth')

const router = new Router()

router.get('/signin', signIn.getHandler)
router.post('/signin', signIn.postHandler)
router.get('/signup', signUp.getHandler)
router.post('/signup', signUp.postHandler)
router.get('/logout', logout.getHandler)

module.exports = router.routes()
