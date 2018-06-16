const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const mysql2 = require('mysql2/promise');
const render = require('koa-ejs');
const path = require('path');

render(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'ejs',
    cache: false
});

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'design_pattern',
});

const userModel = require('./models/user');
const userTemp = require('./controllers/user');
const userController = userTemp(userModel, pool);

// Repository pattern
router.get('/find_user_by_id/:id', userController.findUserById);

// Write your own Repository pattern
router.get('/find_user_by_firstname/:firstname', userController.findUserByFirstname);

// Write your own Repository pattern
router.get('/remove_user/:id', userController.removeUser);

router.get('/add_user_certification/:id/:certificationName', userController.addUserCertification);

app.use(router.routes());
app.listen(3000);