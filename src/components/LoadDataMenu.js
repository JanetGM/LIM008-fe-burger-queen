import React ,{Component,useState} from 'react';
const LoadDataMenu = ({ info, setInfo }) => info.map(e =>
<div class="row">
<div class="col">
<p className="offset-1 cardMenu" key={e.id}>{e.name}</p>
<img src={e.image} className="cardImage"/>
</div>
</div>);
export default LoadDataMenu;