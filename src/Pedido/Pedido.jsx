import React, { Component } from 'react';
import './Pedido.css';
// import Example from '../pruebaHooks/HooksP';

class Pedido extends Component{
 

render(){
    // console.log(data);
    return(
    <div className="Pedido">
    <nav>
        <a  className="nav-menu"   href="#">  BreakFast</a>
        <a  className="nav-menu" href="#">Launch-Dinner</a>
    </nav>
        <div className="name-client">
            <label> Nombre del Cliente : </label>
            <input type="text"/>
        </div>
    
    </div>
    ) 
  }
}
export default Pedido;