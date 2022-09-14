import './App.css';
import React, {Component} from 'react';
import api from './services/api';

class App extends Component{
  state={
    postagens:[],
  }

  async componentDidMount(){
    const resposta = await api.get('');
   // console.log(resposta.data.thumbImage);
    this.setState({postagens:resposta.data});

  }

  render(){
    const {postagens} = this.state;

    return(
      <main>
        <div class="title" >
        <h2 >Notícias</h2>
      </div>
     {console.log(postagens)}
        {postagens.map(postagem=>(
          <div class="container">
            <div class="container-post">
            <h2>{postagem.title}</h2>
            <img src={`https://api-fake-blog.herokuapp.com${postagem.thumbImage}`} class="imagem"/>
            <div class="container-info">
            <img src={`https://api-fake-blog.herokuapp.com${postagem.profileThumbImage}`} />
              <p>{postagem.profileName}</p>
            </div>
            <button class="button" >
              Ver mais
            </button>
            </div>
          </div>
          ))}
      </main>
    )
  }
}

export default App;
