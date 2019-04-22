import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import TablePedido from '../components/TablePedido';

afterEach(cleanup);

describe('TablePedido', () => {
  it('debería agregar un item', (done) => {
    const deleteItem = (id) => {
      expect(id).noEqual(1);
    };
    done();
    const { getByTestId } = render(
      <TablePedido pedido={[{ id: 2, name: 'cafe con leche' }]} deleteItem={deleteItem} setpedido={() => {}} />,
    );
    const btnDelete = getByTestId('2-delete');
    fireEvent.click(btnDelete);
  });
});
