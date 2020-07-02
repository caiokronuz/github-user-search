import React, {Component} from 'react';
import './style.css';

export default class Main extends Component{
    redirect = () => {
        const name = document.getElementById('txt-name').value;
        window.location.assign(`http://caiokronuz.github.io/github-user-search/user/${name}`)           
    }

    render(){
        return(
            <div className='input '>
                    <input type="text" id="txt-name" placeholder="Nome de usuário"></input>
                    <button onClick={this.redirect}>Procurar</button>
            </div>
        )
    }
}