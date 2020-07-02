import React, {Component} from 'react';
import './style.css';

export default class Main extends Component{
    redirect = () => {
        const name = document.getElementById('txt-name').value;
        window.location.assign(`http://localhost:3000/user/${name}`)           
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