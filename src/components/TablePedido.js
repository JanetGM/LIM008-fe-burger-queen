/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
const TablePedido = ({ pedido, setpedido }) => {
  const modifyStatePedido = (item, index) => {
    const copyArrPedido = [...pedido];
    copyArrPedido[index] = item;
    setpedido(copyArrPedido);
  };
  const deleteItem = (id) => {
    const filterdata = pedido.filter(e => e.id !== id);
    setpedido([...filterdata]);
  };
  const calculateTotalAmout = (cantidad, price) => {
    const arrSubTotal = [];
    arrSubTotal.push(cantidad * price);
    arrSubTotal.reduce((a, b) => a + b);
    return cantidad * price;
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
                    dataPedido.cantidad += 1;
                    modifyStatePedido(dataPedido, index);
                  }}
>
+ 
               </button>
                {e.cantidad}
                <button type="button" 
                  onClick={() => {
                    const dataPedido = { ...e };
                    dataPedido.cantidad -= 1;
                    modifyStatePedido(dataPedido, index);
                  }}
>
-
                </button>
              </td>
              <td>
                {calculateTotalAmout(e.cantidad, e.price)}
              </td>
              <td>
                <button type="button" onClick={() => deleteItem(e.id)}><i className="fas fa-trash" /></button>
              </td>
            </tr>
          )))} 
      </table>
    </div>
  );
};
export default TablePedido;
