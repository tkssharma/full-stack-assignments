import React, {FC} from 'react';
import './Product.css';
import {Product as ProductModel} from '../../model/product';
import { ShoppingContext } from "../../contexts/ShoppingContext"
import { Types } from "../../reducers/ShoppingReducer"

interface ProductProps {
    product: ProductModel;
}

const Product: FC<ProductProps> = (({product}) => {

    const { dispatch } = React.useContext(ShoppingContext)

    const addToCart = (product: ProductModel) => {
      dispatch({ type: Types.ADD_TO_CART, payload: product })
    };

    return (
        <div className={'product-container'}>
            <figure className='product blue'>
                <div>
                    <img src={product.imgUrl} alt='product'/>
                    <div className='price'>125.25$</div>
                </div>
                <figcaption>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <a onClick={() => {
                        addToCart(product);
                    }}>Add to Cart</a>
                </figcaption>
            </figure>
        </div>
    );
});

export default Product;
