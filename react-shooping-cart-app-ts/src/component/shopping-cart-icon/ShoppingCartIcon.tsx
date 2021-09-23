import React, {FC, useEffect} from 'react';
import './ShoppingCartIcon.css';
import CartIcon from '../../assets/shopping-cart.svg';
import { ShoppingContext } from "../../contexts/ShoppingContext"
import {Product as ProductModel} from '../../model/product';

interface ShoppingCartIconProps {
    onClick: () => void;
}

const ShoppingCartIcon: FC<ShoppingCartIconProps> = (({onClick}) => {

    const { state } = React.useContext(ShoppingContext)

    return (
        <div className='icon-container' onClick={(onClick)}>
            <img className='shopping-cart-icon' src={CartIcon} alt='shopping-cart-icon'/>
                <span className='number-of-items-in-cart'>{state.counter}</span>
        </div>
    );
});

export default ShoppingCartIcon;
