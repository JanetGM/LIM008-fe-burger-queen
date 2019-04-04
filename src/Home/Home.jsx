//importar componente de React
import React, { Component } from 'react';
//importar los style

import './Home.css'

class Home extends Component{
    constructor(props){
        super(props)

    }


//render//

render(){
    return (
        <div>
        <div className="header">
          <div className="barra">
          <label className="titleB">Welcome to Burguer Queen</label>
            <progress max='100' value='80' ></progress>
         </div>
         <img src="https://png.pngtree.com/element_pic/17/08/23/d61a0d39c9dcb3fd48811ee53112a03e.jpg" className="image"/>
        </div> 
        </div>
          
    
    )
  }
}
export default Home;