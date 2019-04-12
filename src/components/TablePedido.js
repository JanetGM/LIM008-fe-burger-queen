/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
const TablePedido = ({ newstate, setstate }) => {
  const deleteItem = (id) => {
    const filterdata = newstate.filter(e => e.id !== id);
    setstate([...filterdata]);
  };
  return (newstate.map(e => (
    <div>
      <p key={e.id}>
        { e.name }
        <i className="fas fa-trash" onClick={() => deleteItem(e.id)} />
      </p>
    </div>
  )));
};
export default TablePedido;
