import React from 'react';

const Filterdata = ({ setOption }) => {
  const newLocal = (
    <div className="header-menu">
      <button type="button" className="menu-tag btn btn-outline-primary" onClick={() => setOption('morning')} data-testid="btn-option-1">Desayuno</button>
      <button type="button" className="menu-tag btn btn-outline-primary" onClick={() => setOption('rest-day')} data-testid="btn-option-2">Almuerzo/Cena</button>
    </div>
  );
  return (newLocal);
};
export default Filterdata;
