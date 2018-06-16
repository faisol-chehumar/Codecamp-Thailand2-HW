module.exports = function (courseModel, pool) {
  return {
      async findCourseById(ctx, next) {
        const courseObject = await courseModel.findById(pool, ctx.params.id)
        // console.log(userObject)
        await ctx.render('index', {
            data: courseObject
        })
        // ctx.body = courseObject
        await next()
      },
      async findCourseByPrice(ctx, next) {
        // const courseObject = await courseModel.findByPrice(pool, ctx.params.price)

        const courseObject = await courseModel.findByPrice(pool, ctx.params.price)
        let courseObjArr = []
        courseObject.map(async (obj) => {
            let objData = await obj
            courseObjArr.push(objData)
        })

        console.log(courseObjArr)

        await ctx.render('index', {
            data: courseObjArr
        })
        // ctx.body = courseObject
        await next()
      },
  }
}