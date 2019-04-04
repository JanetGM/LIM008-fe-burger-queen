import React, {Component} from 'react';
import './PedidoForm.css'

class PedidoForm extends Component {
    constructor(){
        super();
        this.addNote=this.addNote.bind(this);
    }

//funcion para agregar nota
addNote(){
   this.props.addNote(this.textInput.value);
   this.textInput=" ";
   this.textInput.focus();

}

render () {
   return(
     <div className="PedidoForm">
        <input type="text"
        ref={ input => { this.textInput = input; }}
        placeholder="write client's name"
        />
        <button
        onClick = {this.addNote}
        >
            Add Pedido
        </button>
    </div>
   ) 
}

}

export default PedidoForm;