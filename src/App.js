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
    note:[
      
    ]
  };
  //requerir a la base de datos firebase
  this.app=firebase.initializeApp(DB_CONFIG);
  this.db=this.app.database().ref().child('note')
  this.addNote = this.addNote.bind(this);
}
//evento que se ejecuta después de crear un componente
// componentDidMount(){
//   const {notes}  = this.state;
//   this.db.on("child_added",snap =>{
//     notes.push({
//       noteId :snap.key,
//       noteContent:snap.val().noteContent
//     })
//     this.setState({notes})
//   });
// }
 removeNote(){
   
 }
 addNote(notes){
  //  let { note } = this.state;
  //  note.push({
  //    noteId:note.length +1,
  //    noteContent :notes
  //  });
   this.db.push().set({noteContent:notes});
  //  this.setState({ notes });
 }

  render() {
    return (
      <div className="App">
       <Home/>
      <div className="notesContainer">
      </div>
        <div className="notesHeader">

        </div>
       
        {/* <div className="notesBody">
        <ul>{
            this.state.note.map(note => {
              return (
                <Pedido
                noteContent={note.noteContent}
                noteId={note.noteId}
                key={note.nodeId}
                />
             )
            })
          }
          
        </ul>
        </div>  */}
        <div className="notesFooter">
            {/* <PedidoForm addNote={this.addNote}/> */}
        </div>
      </div>
    );
  }
}

export default App;
