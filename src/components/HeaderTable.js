import React ,{Component} from 'react';

const HeaderTable = () => {
  return (
    <div>
      <table>
        <th className="border 10px w">Producto </th>
        <th className="border 10px w">Cantidad</th>
        <th className="border 10px w">SubTotal</th>
      </table>
    </div>
  );
};
export default HeaderTable;
