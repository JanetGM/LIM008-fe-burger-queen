import React ,{useState,useEffect} from 'react';
const Filterdata = ({filtro,on}) =>{
const filterInfoMenu = (arrMenu,turn) => (arrMenu.filter(item=>item.turn===turn))

 return (
     <div>
        <a onClick={console.log(on,filtro)}>Desayuno</a>
        <a onClick={filtro}>Almuerzo/Cena</a>
     </div>

 )
}
export default Filterdata;