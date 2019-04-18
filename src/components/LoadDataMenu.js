import React from 'react';
import PropTypes from 'prop-types'; 

export const LoadDataMenu = ({ info, additem, pedido, option }) => (info.map((item, indice) => (option === item.type ? (
  <div key={item.id} className="container-flex" onClick={() => additem(item, pedido, indice)}>
    <div>
      <img src={item.image} className="cardImage offset-1" alt="cardimage" />
      {item.name}
    </div>
  </div>
)
  : null
)));
export default LoadDataMenu;

LoadDataMenu.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
};
