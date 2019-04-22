// import menu from '../../src/data/menu.json';
import { act } from 'react-testing-library';

export default url => console.log('desde dentro del mock de axios') || ({
  then: jest.fn(callback => act(() => {
    callback([
      {
        id: 1,
        name: 'café americano',
        category: 'bebida-mañana',
        price: 5.00,
        image: 'https://github.com/JanetGM/LIM008-fe-burger-queen/blob/devJanet/src/img/cafeamericano.jpg?raw=true',
        type: 'morning',
        quantity: 1,
      },
      {
        id: 2,
        name: 'cafe con leche',
        category: 'bebida-mañana',
        price: 10.00,
        image: 'https://github.com/JanetGM/LIM008-fe-burger-queen/blob/devJanet/src/img/cafeconleche.jpg?raw=true',
        type: 'morning',
        quantity: 1,
      },
    ]);
  })),
});
