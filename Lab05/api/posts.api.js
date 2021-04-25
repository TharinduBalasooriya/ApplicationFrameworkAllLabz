import { v4 as uuidv4 } from 'uuid';
uuidv4();

let posts = new Map();

const createPost = (obj)=>{
    const post ={
        id : uuidv4(),
        postedDate : new Date(),
        name : obj.name,
        discription : obj.discription
    }
    posts.set(post.id,post);
}
const getPosts = () =>{
    return [...posts.values()] // posts -> Map
};

const getPost = (id) => {
    return posts.get(id); //id -> key
};
