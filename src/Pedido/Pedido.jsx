import React, { Component } from 'react';
import './Pedido.css';
  
class Pedido extends Component{
    constructor(props){
        super(props);
        this.noteContent= props.noteContent;
        this.noteId=props.noteId;
    }

handleRemove(id){
    console.log(id);
    alert('remove : ', id)
}



render(){
    return(
    <div className="Pedido">
       <span 
        onClick={()=> this.handleRemove(this.noteId)}
        >&times;</span>
       <li>{this.noteContent}</li>
    </div>
    ) 
  }
}
export default Pedido;