import React from 'react';

export const LoadDataMenu = ({ info, additem, pedido }) => info.map(e => (
<div  key={e.id} className="row fondo" onClick={()=> additem(e, pedido)}>
    <div  className="col">
        <img src={e.image}  className="cardImage offset-1 "/>
        <p className="offset-1 cardMenu" >{e.name}</p>
    </div>
</div>
));
export default LoadDataMenu;
