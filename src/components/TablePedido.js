/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const TablePedido = ({ pedido, setpedido }) => {
  const modifyStatePedido = (item, index) => {
    const copyArrPedido = [...pedido];
    copyArrPedido[index] = item;
    setpedido(copyArrPedido);
  };
  const deleteItem = (id) => {
    const arrPedido = pedido;
    const filterdata = arrPedido.filter(e => e.id !== id);
    setpedido([...filterdata]);
  };
  const calculateTotalAmout = (arrPedido) => {
    return arrPedido.reduce((accum, elem) => { 
      return accum + (elem.quantity * elem.price);
    }, 0);
  }; 
  return (
    <div>
      <table className="table table-hover" id="table-pedido">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody data-testid="item-pedido-list">
        {pedido.length === 0 ? null : (
          pedido.map((e, index) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{`$ ${e.price}`}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      const dataPedido = { ...e };
                      dataPedido.quantity += 1;
                      modifyStatePedido(dataPedido, index);
                    }}
>
+
                </button>
                  {e.quantity}
                  <button 
                    type="button" 
                    onClick={() => { 
                      const dataPedido = { ...e };
                      dataPedido.quantity -= 1;
                      modifyStatePedido(dataPedido, index);
                    }}
>
-
                </button>
                </td>
                <td>
                  {e.quantity * e.price}
                </td>
                <td>
                  <button type="button" onClick={() => deleteItem(e.id)} data-testid={`${e.id}-delete`}><i className="fas fa-trash" /></button>
                </td>
              </tr>
          )))} 
        </tbody>
      </table>
      <p  data-testid={`total-id`}>{ `$ ${calculateTotalAmout(pedido)}`}</p>
    </div>
  );
};
export default TablePedido;

TablePedido.propTypes = {
  pedido: PropTypes.arrayOf(Object).isRequired,
  setpedido: PropTypes.func.isRequired,
};