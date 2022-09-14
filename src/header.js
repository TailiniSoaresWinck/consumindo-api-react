import React, {Component} from 'react';
import './header.css';

class Header extends Component{

    render(){
        return(
            <header>
                <div class="container-title">
                    <h2>.blogNotícias</h2>
                </div>
                <nav>
                    <div class="container-fluid">
                    <ul>
                        <li class="nav-item" >
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Serviços</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Telejornais</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Editorias</a>
                        </li>
                    </ul>
                    </div>
              </nav>
            </header>
        )
    }

}

export default Header;