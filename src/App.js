import React, { useEffect, useState } from 'react';
import './App.css';
import Aumentar from './pruebaHooks/Aumentar';


const ApiMenu = () => {
const prove = () =>{

}
const [info,setInfo] = useState([]);  
useEffect(() => {
    fetch('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
    .then(resp => resp.json())
    .then(data => setInfo(data.concat(info)))
  },[]);

return(
  <div>{info.map((item,key)=>(
    <div key ={key}>{item.name}</div>
  ))}
    <p>{info.filter(item=> {
      return(item.id===1)
    }).map(e=><p>{e.turn}</p>)
    }</p>

  </div>

)
}
export default ApiMenu;