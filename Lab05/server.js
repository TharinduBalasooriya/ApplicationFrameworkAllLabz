const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
const HomeRoutes = require('./home.router');



const PostRoutes = require('./post.routes')

// response

app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());
app.use(ctx => {
    ctx.body = 'Hello Koa';
});



app.listen(3000);
console.log('Application is running on port 3000');