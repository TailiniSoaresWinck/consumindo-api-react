import React from "react";
import './posts.css';
import { Link } from "react-router-dom";

const Posts = ( obj ) => {
  const {post: 
    {title, thumbImageAltText, postDate, profileName, thumbImage,profileThumbImage }} = obj
    const { id } = obj
    return (
        <div class='main'>
            <div class='posts-div'>
            <div class='div-img'>
            <h3>{title}</h3>
            <img src={`https://api-fake-blog.herokuapp.com${thumbImage}`} alt={thumbImageAltText} />
            </div>
            <div clas='info-extra'>
                <p>{profileName}</p>  
                <p>{postDate}</p>
            </div>
            <Link class='link-mais' to={`/postagens/${id}`}>
                Saiba mais
            </Link>
            </div>
        </div>
    );
}
export default Posts;