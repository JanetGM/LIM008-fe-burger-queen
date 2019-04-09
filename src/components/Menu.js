import React, { useState,Component } from 'react';
import Filterdata from './Filterdata';

export const Menu = ({mouse,setMouse}) => {
  
   return(
       <div className="">
         <a className="offset-1" onClick={()=>{console.log('eva')}}>Desayuno</a>
         <a className="offset-1">Dinner</a>
        <a>{mouse}</a>
       </div>
   )
}
export default Menu;