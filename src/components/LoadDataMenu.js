import React from 'react';
import PropTypes from 'prop-types'; 

export const LoadDataMenu = ({ info, additem, pedido, option }) => 
  (info.map((item, indice) => (option === item.type ? ( 
  <div className="card border-success mb-3" style={{ width : "10rem"}}  key={item.id}  onClick={() => additem(item, pedido, indice)} data-testid={`${item.id}-btn`}>
  <div className="card-body text-success">
    <h5 className="card-title">{item.name}</h5>
    <img className="card-img-top" src={item.image} className="card-img-top img-icon"  alt="Card image cap" />
  </div>
  <div class="card-footer bg-transparent border-success">{`Precio : $ ${item.price}`}</div>
</div>
    )
  : null
)));
export default LoadDataMenu;

LoadDataMenu.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
};
