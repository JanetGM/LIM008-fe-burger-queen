import React, { useEffect, useState ,Component} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import LoadDataMenu from './components/LoadDataMenu.js';
import Filterdata from './components/Filterdata';
import TablePedido from './components/TablePedido';
const ApiMenu = () => {
//ESTADOS-------------
const [info,setInfo] = useState([]);  
const [pedido,setPedido] = useState([]);
const [opcionfiltro,setOpcionFiltro] = useState('moorning');

//FUNCIONES--------------------

const checkClick = (option) => setOpcionFiltro(option)

const AddItem = (id)=>{
    setPedido([...pedido,id])
 }

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
   <Filterdata  onClick={checkClick} opcionFiltro={opcionfiltro} info={info}/>
    <div className="row">
      <div className="col">
          <LoadDataMenu info={info} additem={AddItem} />
      </div>
       <div className="col">
       <TablePedido newstate={pedido} setstate={setPedido}/>
      </div>   
    </div>      
  </div>
  
)
}
export default ApiMenu;