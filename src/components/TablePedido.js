import React ,{Components,useState} from 'react';

const TablePedido = ({newstate,setstate}) => {
  const deleteItem = (id) =>{
    
  }
  return(newstate.map(e => { 
    return(
      <div>
        <p key={e.id}>{e.name}<i className="fas fa-trash" onClick={deleteItem}></i></p>
      </div>
   )}))
} 
 
export default TablePedido;