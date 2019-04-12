import React, { useState } from 'react';

const Filterdata = ({ option }) => {
  const newLocal = (
    <div className="header-menu">
      <button type="button" className="menu-tag" value="moorning">{option}</button>
      <button type="button" className="menu-tag" value="AfternoonNight">Almuerzo/Cena</button>
    </div>
  );
  return (newLocal);
};
export default Filterdata;
