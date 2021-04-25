const Koa = require('koa');
var bodyParser = require('koa-bodyparser');

//koa application
const app = new Koa();

const HomeRoute = require('./routes/home.route');

//Registering the body parser
app.use(bodyParser()); // midleware when this pass , it will not block the code
app.use(HomeRoute.routes()).use(HomeRoute.allowedMethods());
app.use(ctx => {
    ctx.body = 'Hello World';
});
app.listen(3000,err =>{
    if (err){
        console.error(err);
        return;
    }
    console.log('Application is running on port 3000');
});

