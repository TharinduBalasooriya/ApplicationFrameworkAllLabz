const { v4: uuidv4 } = require('uuid');


const posts = new Map();
function createPost (obj){

    let post = {
        id:uuidv4(),
        name:obj.name,
        description:obj.description,
        postedDate: new Date()

    }

    posts.set(post.id,post);

    return post

}

function getPosts(){
    return [...posts.values()]
}

function  getPost(id)
{
    return posts.get(id);
}

module.exports = {createPost,getPost,getPosts}