import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import SavePedido from '../components/Pedido';

// limpian a el dom
afterEach(cleanup);

describe('SavePedido', () => {
  it('debería capturar el nombre del cliente', () => {
    const getName = (e) => {
      expect(e.target.value).toBe('janet');
      done();
    };
    const { getByTestId } = render(
    <SavePedido pedido={[{ id: 1, name: 'cafe americano' }]} 
   value="janet" getName={getName} 
   addPedido={()=>{}}/>);
    const nameText = getByTestId('txt-name');
    fireEvent.change(nameText);
  });
});