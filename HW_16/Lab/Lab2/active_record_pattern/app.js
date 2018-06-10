const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'design_pattern',
});

const userModel = require('./models/user') (pool);

// No pattern
router.get('/normal_query/:id', async (ctx, next) => {
    const [rows] = await pool.query('SELECT * from users WHERE id = ?',[ctx.params.id]);
    ctx.body = rows;
    await next();
});

// Repository pattern
router.get('/find_user_by_id/:id', async (ctx, next) => {
    const userObject = await userModel.findById(ctx.params.id);
    userObject.money -= 1000;
    await userObject.save();

    ctx.body = {
        id: userObject.id,
        firstname: userObject.firstname,
        lastname: userObject.lastname,
        salary: userObject.salary,
        money: userObject.money,
        jsonData: userObject.jsonData
    };
    await next();
});

// Write your own Repository pattern
router.get('/find_user_by_firstname/:firstname', async (ctx, next) => {
    // TODO: include repository
});

// Write your own Repository pattern
router.get('/remove_user/:id', async (ctx, next) => {
    // TODO: include repository
});

router.get('/add_user_certification/:id/:certificationName', async (ctx, next) => {
    let userObject = await userModel.findById(ctx.params.id);
    
    userObject.money -= 3000;
    userObject.jsonData.certification.push({
        name: ctx.params.certificationName,
        year: 2018
    });
    userObject.save();

    ctx.body = {
        id: userObject.id,
        firstname: userObject.firstname,
        lastname: userObject.lastname,
        salary: userObject.salary,
        money: userObject.money,
        jsonData: userObject.jsonData
    };
    await next();
});

app.use(router.routes());
app.listen(3000);