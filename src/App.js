import React, { useEffect, useState ,Component} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Menu from './components/Menu';
import LoadDataMenu from './components/LoadDataMenu.js';
import Filterdata from './components/Filterdata';
import TablePedido from './components/TablePedido';
const ApiMenu = () => {
//ESTADOS-------------
const [info,setInfo] = useState([]);  

const [opcionfiltro,setOpcionFiltro] = useState({filtro:'moorning'});

//FUNCIONES--------------------

const checkClick = (option) => setOpcionFiltro(option)


//FETCH JSON MENU
useEffect(() => {
    fetch('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
    .then(resp => resp.json())
    .then(data => setInfo(data.concat(info)))
  },[]);

//MOSTRAR EN PANTALLA
return(
  
  <div>
   <Header/>
    <div className="row">
      <div className="col">
          <Filterdata filtro={opcionfiltro.filtro} on={checkClick} info={info}/>
          <LoadDataMenu info={info} setInfo={setInfo}/>
      </div>
      <div className="col">
    
     
      </div>   
    </div>      
  </div>
)
}
export default ApiMenu;