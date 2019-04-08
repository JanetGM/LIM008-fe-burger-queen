import React, { useEffect, useState ,Component} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Menu from './Menu/Menu';
import Home from './Home/Home'

// import Aumentar from './pruebaHooks/Aumentar';

const ApiMenu = () => {

const prove = (arrMenu,turn) => {
return (arrMenu.filter(item=>item.turn===turn))
}

const [info,setInfo] = useState([]);  
// const [mouseClick,setMouse] = useState('');
useEffect(() => {
    fetch('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
    .then(resp => resp.json())
    .then(data => setInfo(data.concat(info)))
  },[]);

return(
  
  <div>
    <Header/>
    {info.map((item) => (
    <div className="offset-1" key = {item.id}>{item.name}    
    <img src={}/>
    </div>
    
    
    ))}
   <Menu/>

   
  </div>
)
}
export default ApiMenu;