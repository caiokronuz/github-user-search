import React, {Component} from 'react';
import Header from './components/header'
import Routes from './routes'
import './style.css';

export default class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}