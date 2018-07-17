const checkAuth = async (ctx, next) => {
  // console.log(ctx.path)
  if(ctx.path === '/signin' || ctx.path === '/signup') {
    return await next()
  }
  if (!ctx.session || !ctx.session.userId) {
    ctx.body = 'you are not signed in'
    return ctx.redirect('/signin')
  }
  await next()
 }

 const isAuthApi = (ctx) => {
  // console.log(ctx)
  if (!ctx.session || !ctx.session.userId) {
    return false
  }
  return true
 }

 const checkSession = async (ctx, next) => {
  if(ctx.path === '/signin' || ctx.path === '/signup') {
    if (ctx.session.userId) {
      ctx.body = 'you are not signed in'
      // console.log('xx')
      return ctx.redirect('/')
    }
  }

  return await next()
 }
 
module.exports = {
  checkAuth,
  checkSession,
  isAuthApi
}