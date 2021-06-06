package com.lab09.sllit.Lab09.api;

import com.lab09.sllit.Lab09.domain.Post;
import com.lab09.sllit.Lab09.dto.PostDto;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostApi {

    private Map<String, Post> posts;
    //private PostDto postDto;

    public PostApi(){
        this.posts = new HashMap<>();
        //this.postDto = new PostDto();

    }

    public List<Post> getAllPosts(){

        return new ArrayList<>(posts.values());
    }

    public Post addPost(Post post){

        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(),post);
        return post;

    }


    public Post removePost(String id){
        Post post =  posts.get(id);

            posts.remove(id);
            return post;


    }


    public Post updatePost(Post post){

        posts.remove(post.getId());
        posts.put(post.getId(),post);
        return post;

    }



}
