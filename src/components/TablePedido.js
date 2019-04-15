/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
const TablePedido = ({ newstate, setstate }) => {
  const disminuir = (e) => {
    e.cantidad -= 1;
  };
  const aumentar = (e) => {
    e.cantidad += 1;
  };
  const deleteItem = (id) => {
    const filterdata = newstate.filter(e => e.id !== id);
    setstate([...filterdata]);
  };
  return (newstate.map(e => (
    <div>
      <span>{e.name}</span>
      <span>{ e.cantidad }</span>
      <button type="button" onClick={() => aumentar(e)}>+</button>
      <button type="button" onClick={() => disminuir(e)}>-</button>
      <button type="button" onClick={() => deleteItem(e.id)}><i className="fas fa-trash" /></button>
    </div>
  )));
};
export default TablePedido;
