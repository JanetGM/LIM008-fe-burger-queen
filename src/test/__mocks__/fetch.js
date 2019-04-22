import { act } from 'react-testing-library';

export default url => console.log('desde dentro del mock') || ({
  then: (cb1) => {
    cb1({
      json: () => console.log('desde dentro del mock de json') || ({
        then: jest.fn(callback => act(() => {
          callback([
            {
              id: 1,
              quantity: 1,
              category: 'breakfast',
              name: 'Café americano',
              price: 5,
              image: 'http://www.prensa-latina.cu/images/2018/diciembre/08/1-lam-cafe.jpg',
            },
            {
              id: 2,
              quantity: 1,
              category: 'breakfast',
              name: 'Café con leche',
              price: 7,
              image: 'https://banner2.kisspng.com/20180224/saq/kisspng-latte-coffee-espresso-ristretto-cappuccino-drinks-latte-5a915ca65077a8.5479297115194758783296.jpg',
            },
          ]);
        })),
      }),
    });
  },

});
