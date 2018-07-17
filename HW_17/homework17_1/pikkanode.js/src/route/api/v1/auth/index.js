const Router = require('koa-router')
const auth = require('../../../../service/auth')
// const service = require('../../../service')

const router = new Router()

// router.prefix('/api/v1')
router.get('/signin', signIn)
router.post('/signin', signIn)
router.get('/signup', signUp)
router.post('/signup', signUp)
router.post('/signout', signOut)

module.exports = router.routes()

async function signIn (ctx) {
	const { email, password } = ctx.request.body

	try {
		const ok = await auth.signIn(email, password)
    
		if (!ok) {
			console.log(ok)
			ctx.status = 400
			ctx.body = {
				error: 'wrong email or password'
			}
			return
    }

		ctx.body = {}
	} catch (err) {
    console.log(err)
		ctx.status = 400
		ctx.body = {
			error: 'Invalid input'
		}
		return
	}
}

async function signUp (ctx) {
  const { email, password } = ctx.request.body

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if(!validateEmail(email)) {
    ctx.status = 400
    ctx.body = {
      error: "invalid email"
    }
    return
  }

  if(password.length < 6) {
    ctx.status = 400
    ctx.body = {
      error: "password too short"
    }
    return
  }


	try {
		const ok = await auth.signUp(email, password)
		if (!ok) {
      // console.log(ok)
			ctx.status = 400
			ctx.body = {
				error: "Invalid email"
			}
			return
    }
    // console.log(ok)
    ctx.status = 200
		ctx.body = {
      "userId": 1099
    }
	} catch (err) {
		ctx.status = 400
		ctx.body = {
			error: 'email already used'
		}
		return
  }
}

function signOut (ctx) {
	ctx.status = 200
	ctx.body = {
		
	}
}