import React, { Component } from 'react';
import Items from '../Items/Items';
export class Breakfast extends Component {
    
    
  render() {
      
     return (
       this.props.menuBreakfast.map(item => (
        <Items key={item.id} menu={item}/>
       )
       )
        )
  }
}

export default Breakfast;
