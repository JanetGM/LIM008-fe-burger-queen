import React from 'react';

const Filterdata = ({ setOption }) => {
  const newLocal = (
    <div className="header-menu">
      <button type="button" className="btn-menu offset-7 " onClick={() => setOption('morning')} data-testid="btn-option-1">Desayuno</button>
      <button type="button" className="btn  btn-menu  " onClick={() => setOption('rest-day')} data-testid="btn-option-2">Almuerzo/Cena</button>
    </div>
  );
  return (newLocal);
};
export default Filterdata;
