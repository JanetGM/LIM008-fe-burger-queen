import React from 'react';
import { render, fireEvent, cleanup, waitForElement, act } from 'react-testing-library';
import App from '../App';

afterEach(cleanup);

describe('App',()=>{
 it('Pedido comienza vacio', () => {
    const { getByTestId } = render(<App />);
    const list = getByTestId('item-pedido-list');
    expect(list.children).toHaveLength(0);
 });
 it('Agrega un nuevo item al pedido', async () => {
    const { getByTestId } = render(<App />);
    const btn = await waitForElement(() => getByTestId('1-btn'));
    const btn2 = await waitForElement(() => getByTestId('2-btn'));
    await act(async () => {
      fireEvent.click(btn);
    });
    await act(async () => {
      fireEvent.click(btn2);
    });
    const list = getByTestId('item-pedido-list');
    expect(list.children).toHaveLength(2);
    const total = getByTestId('total-id');
    expect(total.textContent).toBe('$ 12');
 });
});
