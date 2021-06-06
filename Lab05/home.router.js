const Router = require('@koa/router')
 const router = new Router({
     prefix:'/home'
 })

router.get('/', ctx=>{
    ctx.body = "Hello world1"
})

router.post('/', ctx=>{
    ctx.body = "Hello world2"
});

module.exports = router;