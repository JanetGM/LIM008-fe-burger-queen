/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
const TablePedido = ({ newstate, setstate }) => {
  const disminuir = (e) => {
    e.cantidad += 1;
    setstate([...newstate]);
  };
  const aumentar = (e) => {
    e.cantidad += 1;
    setstate([...newstate]);
  };
  const deleteItem = (id) => {
    const filterdata = newstate.filter(e => e.id !== id);
    setstate([...filterdata]);
  };
  return (newstate.map(e => (
    <div>
      <table className="table table-bordered table-hover">
        <th>{ e.name }</th>    
        <th>
         <label>{ e.count }</label>
        <button type="button" onClick={() => disminuir(e)}>+</button>
        <button type="button" onClick={() => aumentar(e)}>-</button>
        </th>
        <th>
        <button type="button" onClick={() => deleteItem(e.id)}><i className="fas fa-trash" /></button>
       </th>
      </table> 
    </div>
  )));
};
export default TablePedido;
