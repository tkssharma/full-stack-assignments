import React, {FC, useEffect, useState} from 'react';
import './Products.css';
import {Product as ProductModel} from '../../model/product';
import {ProductService} from '../../service/product.service';
import Product from '../product/Product';

interface ProductsProps {
    productService: ProductService;
}

const Products: FC<ProductsProps> = (({productService}) => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productService.getProducts().then(products => setProducts(products));
    }, [productService]);

    return (
        products.length === 0 ? null :
          <div className='products-container'>
                  {products.map(product => <Product key={product.id} product={product}/>)}
          </div>
    );
});

export default Products;
