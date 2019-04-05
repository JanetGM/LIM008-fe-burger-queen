import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase';
import {DB_CONFIG} from './config/config';
import Pedido from './Pedido/Pedido';
import PedidoForm from './PedidoForm/PedidoForm';
import Home from './Home/Home';
import 'firebase/database';


class App extends Component {
constructor(){
  super();
  this.state = {
    items:[ ],
    isLoaded:false,
  };
  
}

componentDidMount(){
  fetch('http://hp-api.herokuapp.com/api/characters')
  .then(res => res.json())
  .then(json =>{
    this.setState({
      isLoaded:true,
      items:json,
    })
  });
}

  render() {
    let {isLoaded,items}=this.state;
    if(!isLoaded){
      return <div>Loading...</div>;
    } 
    else {
  
    return (
      <div className="App">
        data has been workeed
      </div>
    );
  }
}
}

export default App;
