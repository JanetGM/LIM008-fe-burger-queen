import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import LoadDataMenu from '../components/LoadDataMenu';

afterEach(cleanup);

describe('LoadDataMenu', () => {
  it('debería agregar un item', (done) => {
    const addNewItem = (obj) => {
      expect(obj).toEqual({ id: 1, name: 'cafe americano' });
      done();
    };
    const { getByTestId } = render(
      <LoadDataMenu info={[{ id: 1, name: 'cafe americano' }]} additem={addNewItem} pedido={[]} />,
    );
    const btnAdd = getByTestId('1-btn');
    fireEvent.click(btnAdd);
  });
});
