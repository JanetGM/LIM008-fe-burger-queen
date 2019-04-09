import React, { useEffect, useState ,Component} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Menu from './components/Menu';
import LoadDataMenu from './components/LoadDataMenu.js';
import Filterdata from './components/Filterdata';
import TablePedido from './components/TablePedido';
const ApiMenu = () => {

const prove = (arrMenu,turn) => {
return (arrMenu.filter(item=>item.turn===turn))
}

const [info,setInfo] = useState([]);  
const [mouse,setMouse] = useState(0);


useEffect(() => {
    fetch('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
    .then(resp => resp.json())
    .then(data => setInfo(data.concat(info)))
  },[]);

useEffect(()=>{
    setMouse(1);
  })
return(
  
  <div>
   <Header/>
    <div className="row">
      <div className="col">
       <Menu/>
       <Filterdata mouse={mouse} setMouse={setMouse}/>
       <LoadDataMenu info={info} setInfo={setInfo}/>
      </div>
      <div className="col">
        <TablePedido/>
      </div>   
    </div>      
  </div>
)
}
export default ApiMenu;