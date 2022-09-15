import axios from 'axios';
import './detalhesPost.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

const Post = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("https://api-fake-blog.herokuapp.com/postagens").then((resposta) => {
        const data = resposta.data;
        const index = parseInt(id)
        const post = data[index];
        console.log(post);
        setPost(post);
      });
  }, []);

  return (
    <div>
      <Header />
      <Link class='link-voltar' to="/">
        Voltar
      </Link>

      {post ? (
        <div class='post'>
          <div class='div-img'>
          <h2>{post.title}</h2>
          <img src={`https://api-fake-blog.herokuapp.com${post.thumbImage}`} alt={`${post.thumbImageAltText}`}/>
          <p>{post.description}</p>
          </div>
          <div class='info-post'>
          <img src={`https://api-fake-blog.herokuapp.com${post.profileThumbImage}`}/>
          <p>{post.profileName}</p>
          <p>{post.postDate}</p>
          </div>
          
        </div>
      ) : (
        <h3>Carregando...</h3>
      )}
      <Footer/>
    </div>
    
  );
}

export default Post;
