import React from "react";
import Post from '../post/posts';


const listaPosts=({post})=>{
    return(
    <div>
      {
      post.map((post, index) => (
        <Post post={post} key={index} id={index}/>
      ))
      }
    </div>
    );
}

export default listaPosts;