import React, { useEffect, useState ,Component} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import LoadDataMenu from './components/LoadDataMenu.js';

const ApiMenu = () => {

const prove = (arrMenu,turn) => {
return (arrMenu.filter(item=>item.turn===turn))
}

const [info,setInfo] = useState([]);  


useEffect(() => {
    fetch('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
    .then(resp => resp.json())
    .then(data => setInfo(data.concat(info)))
  },[]);

return(
  
  <div>
   <Header/>
    <div>    
    <LoadDataMenu info={info} setInfo={setInfo}/>
    <button onClick={()=>{(prove(info,'moorning')).map(e=><label>{e.name}</label>)}}>desayuno</button> 
    </div>    

   
  </div>
)
}
export default ApiMenu;