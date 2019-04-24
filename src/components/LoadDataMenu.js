import React from 'react';
import PropTypes from 'prop-types';

export const LoadDataMenu = ({ info, additem, pedido, option }) => 
  (info.map((item, indice) => (option === item.type ? ( 
    <div className="card offset-2" style={{ width : "150px",height:"250px"}} key={item.id}>
    <div className="border-success " style={{ width : "150px",height:"250px"}}  key={item.id}  onClick={() => additem(item, pedido, indice)} data-testid={`${item.id}-btn`}>
  
    <h5 className="card-title">{item.name}</h5>
    <img className="card-img-top" src={item.image} className="cardImage offset-2"  alt="Card image cap" />

  <div className="card-footer bg-transparent border-success" style={{ width : "150px",height:"20px"}}><span className="offset-2">{`Precio : $ ${item.price}`}</span></div>
</div>
    </div>
  )
    : null)));
export default LoadDataMenu;

LoadDataMenu.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
};
