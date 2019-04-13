import React from 'react';

const Aumentar = () => {
    return(
        <div>
            <p>dsadsa{count}</p>
            <button onClick= { () =>  setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            </div>
    )
}
export default Aumentar ;