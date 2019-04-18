import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SavePedido = ({ pedido, addPedido }) => {
  const [text, setText] = useState('');
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="button" className="btn btn-primary" onClick={() => addPedido(text, pedido)}>Enviar a cocina </button>
    </div>
  );
};
export default SavePedido;

SavePedido.propTypes = {
  pedido: PropTypes.arrayOf(Object).isRequired,
  addPedido: PropTypes.func.isRequired,
};