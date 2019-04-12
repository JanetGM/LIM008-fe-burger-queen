/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './App.css';
import { LoadDataMenu } from './components/LoadDataMenu';
import Filterdata from './components/Filterdata';
import TablePedido from './components/TablePedido';

const ApiMenu = () => {
//  ESTADOS-------------
  const [info, setInfo] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [option, setOption] = useState('moorning');
  //  FUNCIONES--------------------

  const AddItem = (id) => {
    setPedido([...pedido, id]);
  };

  //  FETCH JSON MENU
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
      .then(resp => resp.json())
      .then(data => setInfo(data.concat(info)));
  }, []);


  //  MOSTRAR EN PANTALLA
  return (
    <div>
      <Filterdata info={info} option={option} setoption={setOption} />
      <div className="row">
        <div className="col-5">
          <LoadDataMenu info={info} additem={AddItem} />
        </div>
        <div className="col-7 container">
          <TablePedido newstate={pedido} setstate={setPedido} />
        </div>
      </div>
    </div>

  );
};
export default ApiMenu;
