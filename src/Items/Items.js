import React, { Component,useState } from 'react'

export class Items extends Component {


  render() {
    let {name,price}=this.props.menu;
    
    return (
      <div>
        <p>{name}</p>
        <p>Precio:{price}</p>
      </div>
    )
  }
}

export default Items;
