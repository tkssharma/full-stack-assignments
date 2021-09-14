import React from 'react';
import {Wrapper} from './cart.styles';
import {CartItemTypes} from '../../App';
import CartItem from '../CartItems/cartItems'


type Props = {
  cartItems: CartItemTypes[],
  addToCart: (clickedItem: CartItemTypes)=> number;
  removeFromCart: (id: string) => void;
}
const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => (
  <Wrapper>
    <h2>Your Shopping Cart:</h2>
    {cartItems.length === 0 ? <p>cart is empty</p>: null}
    {cartItems.map(cartItem=>(
      <CartItem/>
    ))}
  </Wrapper>
);


export default Cart;