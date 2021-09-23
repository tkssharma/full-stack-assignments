import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

describe('product component', () => {
   it('renders product information properly', () => {

       const dummyProduct = {
           id: 1,
           imgUrl: 'https://dummyimage.com/dummy.jpg',
           type: '',
           description: 'Lorem ipsum',
           name: 'UnitTest',
           price: 99
       };

       const { getByText, getByRole } = render(<Product product={dummyProduct} />);

       const productImage = getByRole('img') as HTMLImageElement;
       expect(productImage.src).toEqual(dummyProduct.imgUrl);
       expect(getByText(dummyProduct.name)).toBeInTheDocument();
       expect(getByText(dummyProduct.description)).toBeInTheDocument();
       expect(getByText(`${dummyProduct.price.toString()}$`)).toBeInTheDocument();
   });
});
