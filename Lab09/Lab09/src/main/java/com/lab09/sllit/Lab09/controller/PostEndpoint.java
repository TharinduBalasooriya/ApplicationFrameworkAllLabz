package com.lab09.sllit.Lab09.controller;

import com.lab09.sllit.Lab09.api.PostApi;
import com.lab09.sllit.Lab09.domain.Post;
import com.lab09.sllit.Lab09.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndpoint {

    private PostApi postApi;

    @Autowired
    public PostEndpoint(PostApi postApi){
        this.postApi = postApi;
    }

    @GetMapping
    public List<Post> getPosts(){

        return postApi.getAllPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto){

        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());

        return postApi.addPost(post);



    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Post deletePost(@PathVariable("id") String id){
        return postApi.removePost(id);
    }



    @PutMapping
    public Post UpdatePost(@RequestBody Post post){
        return  postApi.updatePost(post);

    }


    
}
