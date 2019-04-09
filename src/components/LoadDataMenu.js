import React ,{Component,useState} from 'react';
const LoadDataMenu = ({ info, setInfo }) => info.map(e =>
<div className="row fondo">
    <div  key={e.id} className="col">
        <img  src={e.image}  className="cardImage offset-1 "/>
        <p className="offset-1 cardMenu" key={e.id}>{e.name}</p>
    </div>
</div>);
export default LoadDataMenu;