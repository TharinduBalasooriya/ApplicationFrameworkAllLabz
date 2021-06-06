const Router = require('@koa/router');
const {createPost,getPost,getPosts} = require('./posts.api');

const router = new Router({
    prefix:'/posts'
})

router.get('/', ctx => {
    ctx.body = getPosts();
    //ctx.body = "Hello world1"
});
router.post('/', ctx => {
    //ctx.body = "Hello world22"
    let post = ctx.request.body;
    post = createPost(post);
    ctx.response.status = 201;
    //
    ctx.body = post;
});
router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getPost(id);
});
module.exports = router;
