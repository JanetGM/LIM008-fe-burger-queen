import React ,{Components,useState} from 'react';

const ListPedido = () => {
  return(
<div>
    <table>
      <thead>
            <tr>
                <th className="offset-1">Producto</th>
                <th className="offset-2">Cantidad</th>
                <th className="offset-1">Acción</th>
                <th className="offset-1">Subtotal</th>
            </tr>
    </thead>
    <tbody>

          <tr>
            <td>Hamburguesa simple</td>
            <td>7</td>
            <td>70.00</td>
            <td>
              <button className="button muted-button ">Edit</button>
              <button className="button muted-button ">Delete</button>
            </td>
          </tr>
    </tbody>
  </table>  
</div>
  )

}
export default ListPedido;