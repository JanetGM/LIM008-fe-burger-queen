import React ,{Componets} from 'react';
import header from '../components/header.css';

 export const Header = () =>{
    return(
        <div className="container-fluid">
           <div className="row">
             <div className="container-flex colorNav col">
                <label className="display-4 offset-4">BurguerQueen</label>
             </div> 
           </div>
        </div>
        
    )
}
export default Header;