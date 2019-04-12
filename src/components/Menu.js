import React from 'react';

export const Menu = ({ mouse, setMouse }) => (
  <div className="">
    <button type="button" className="offset-1" onClick={() => { console.log('eva') ;}}>Desayuno</button>
    <button type="button" className="offset-1">Dinner</button>
    <p>{mouse}</p>
  </div>
);
export default Menu;
