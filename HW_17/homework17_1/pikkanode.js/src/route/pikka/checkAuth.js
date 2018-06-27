const checkAuth = async (ctx, next) => {
  if (!ctx.session || !ctx.session.userId) {
    ctx.body = 'you are not signed in'
    return ctx.redirect('/signin')
  }
  // ctx.redirect('/')
  // return ctx.redirect('/')
  await next()
 }
 
module.exports = {
	checkAuth
}