import React, { Component } from 'react';
import './Pedido.css';
  
class Pedido extends Component{
    constructor(props){
        super(props);
        this.noteContent= props.noteContent;
        this.noteId=props.noteId;
    }

render(){
    return(
    <div className="Pedido">
    <label>Nombre del Cliente :</label>
    <input type="text"/>
    </div>
    ) 
  }
}
export default Pedido;