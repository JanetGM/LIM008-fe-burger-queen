import React, { Component } from 'react';
import Breakfast from './Breakfast/Breakfast';
import Pedido from './Pedido/Pedido';
import './App.css';
import Aumentar from './pruebaHooks/Aumentar';



class App extends Component {
constructor(){
  super();
  this.state = {
    items:[],
    isLoaded:false,
  };
  
}

componentDidMount(){
  fetch('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
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
      return <div>Loading..hay problemas con la data beibi.</div>;
    } 
    else {
    return (
      <div className="App">
      <Aumentar/>
       {/* <Pedido data={this.state.items}/>
       <Breakfast menuBreakfast={this.state.items}/> */}
      </div>

    );
  }
}

}

export default App;
