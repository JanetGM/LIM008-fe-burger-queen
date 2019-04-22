/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { LoadDataMenu } from './components/LoadDataMenu';
import Filterdata from './components/Filterdata';
import TablePedido from './components/TablePedido';
import addNewPedido from './database/saveinFirebase';
import SavePedido from './components/Pedido';

// addNewPedido( 'Betsy', '19/03/17', { items: ['MANGO', 'MARACUYA'] }, 'gutmont', 3.00);

const ApiMenu = () => {
  //  ESTADOS-------------
  const [info, setInfo] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [option, setOption] = useState('morning');

  //  FUNCIONES--------------------
  const AddItem = (producto, data) => {
    const productodata = data.find(e => e.id === producto.id);
    if (productodata) {
      const product = producto;
      product.quantity += 1;
      setPedido([...pedido]);
    } else {
      setPedido([...pedido, producto]);
    }
  };
  //  FETCH JSON MENU
  useEffect(() => {
    axios('https://raw.githubusercontent.com/JanetGM/LIM008-fe-burger-queen/devJanet/src/database/menu.json')
      .then(data => setInfo(data.concat(info)));
  }, []);

  //  MOSTRAR EN PANTALLA
  return (
    <div>
      <Filterdata info={info} option={option} setOption={setOption} />
      <div className="row">
        <div className="col-md-5">
          <LoadDataMenu info={info} additem={AddItem} pedido={pedido} option={option} />
        </div>
        <div className="col-md-7 container">
          <TablePedido pedido={pedido} setpedido={setPedido} />
          <SavePedido pedido={pedido} addPedido={addNewPedido} />
        </div>
      </div>
    </div>

  );
};
export default ApiMenu;
