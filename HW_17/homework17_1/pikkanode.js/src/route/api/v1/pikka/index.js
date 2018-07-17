const Router = require('koa-router')
const auth = require('../../../../service/checkAuth')
const homeapi = require('../../../../service/home')

const router = new Router()

const chkAuth = async (ctx, next) => {
	if(!auth.isAuthApi(ctx)) {
		// console.log('unauthorized')
    ctx.status = 401
   	ctx.body = {
      error: 'unauthorized'
		}
		// await next()
		console.log('Unauthorized')
	} else {
		console.log('Authorized')
		await next()
	}	
}

router.get('/',chkAuth, list)
router.post('/',chkAuth, create)
router.get('/:id', get)
router.post('/:id/comment', createComment)
router.put('/:id/like', like)
router.delete('/:id/like', unlike)

module.exports = router.routes()



async function list (ctx) {
	// console.log(ctx)
  if(!auth.isAuthApi(ctx)) {
    ctx.status = 401
    ctx.body = {
      error: 'You don\'t have permission'
    }
  }

  let imgLists = await homeapi.getHandler()
  // console.log()
	ctx.status = 200
	ctx.body = {
		"list": imgLists
	}
}

async function create (ctx) {
	// console.log(ctx.request.files.picture)
	// console.log(typeof ctx.request.files.picture)
	// console.log(typeof ctx.request.files.picture == 'undefined')
	try {
		// if (!auth.isAuthApi(ctx)) {
		// 	ctx.status = 401
		//  return  ctx.body = {error:'unauthorized'}
		// }
		if (ctx.request.files.picture === undefined) {
			ctx.status = 400
		 return  ctx.body = {error:'picture required'}
		}
		// if (typeof ctx.request.body.caption == 'undefined') {
		// 	ctx.status = 400
		//  return  ctx.body =  {error:'caption required'}   
		// }
	} catch (e) {
		ctx.status = 400
		ctx.body = e.message
		console.log(e.message)
	 // fs.remove(ctx.request.files.picture.path)
	}
}

function get (ctx) {
	ctx.status = 500
	ctx.body = {
		error: 'get not implement'
	}
}

function createComment (ctx) {
	ctx.status = 500
	ctx.body = {
		error: 'createComment not implement'
	}
}

function like (ctx) {
	ctx.status = 500
	ctx.body = {
		error: 'like not implement'
	}
}

function unlike (ctx) {
	ctx.status = 500
	ctx.body = {
		error: 'unlike not implement'
	}
}