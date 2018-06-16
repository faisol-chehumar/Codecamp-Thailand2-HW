module.exports = function (userModel, pool) {
    return {
        async findUserById(ctx, next) {
            const userObject = await userModel.findById(pool, ctx.params.id);
            await ctx.render('user_info', {
                user: userObject
            });
            await next();
        },
        async findUserByFirstname(ctx, next) {
            // TODO: include repository
        },
        async removeUser(ctx, next) {
            // TODO: include repository
        },
        async addUserCertification(ctx, next) {
            let userObject = await userModel.findById(pool, ctx.params.id);

            userObject.money -= 3000;
            userObject.jsonData.certification.push({
                name: ctx.params.certificationName,
                year: 2018
            });
            userModel.store(pool, userObject);

            await ctx.render('user_info', {
                user: userObject
            });
            await next();
        }
    }
}