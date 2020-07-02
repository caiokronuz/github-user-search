import React, {Component} from 'react';
import api from "../../services/api";
import './style.css'

export default class User extends Component{
    state = {
        datas: [],
    }
    async componentDidMount(){
        try{
            const {id} = this.props.match.params;
            const response = await api.get(`/${id}`)
            this.setState({datas: response.data});  
        }catch(error){
            alert('Usuário não encontrado.')
            window.location.replace(`http://localhost:3000/`)
        }
        
    }
    render(){
        const {datas} = this.state;
        return(
            <div className="informations">
                <img src={datas.avatar_url} alt="avatar"></img>
                <h1>{datas.login}</h1>
                <h2>{datas.name}</h2>
                <p>{datas.bio}</p>
                <a href={`https://github.com/${datas.login}?tab=repositories`}>Acessar repositório</a>
            </div>
        )
    }
}