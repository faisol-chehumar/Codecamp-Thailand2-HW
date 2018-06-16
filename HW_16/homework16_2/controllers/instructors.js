module.exports = function (userModel, pool) {
  return {
      async findUserById(ctx, next) {
        const userObject = await userModel.findById(pool, ctx.params.id)
        // console.log(userObject)
        await ctx.render('index', {
            data: userObject
        })
        // ctx.body = userObject
        await next()
      },
      async findUserAll(ctx, next) {
        const userObject = await userModel.findAll(pool)
        let userObjArr = []
        userObject.map(async (obj) => {
            let objData = await obj
            userObjArr.push(objData)
        })
        // console.log(userObjArr)

        await ctx.render('index', {
            data: userObjArr
        })

        await next()
      }
  }
}