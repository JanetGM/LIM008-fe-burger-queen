import React from 'react';

const Filterdata = ({ setOption }) => {
  const newLocal = (
    <div className="header-menu">
      <button type="button" className="menu-tag" onClick={() => setOption('morning')}>Desayuno</button>
      <button type="button" className="menu-tag" onClick={() => setOption('rest-day')}>Almuerzo/Cena</button>
    </div>
  );
  return (newLocal);
};
export default Filterdata;
