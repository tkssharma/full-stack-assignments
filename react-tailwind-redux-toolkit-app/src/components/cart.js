import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from '../slices/cart-slice';

export default function Products() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="grid grid-cols-1 gap-2">

      {cart && cart.map((product) => {
        return (
          <div className="bg-gray-400 border-2 flex flex-col p-2 m-2 items-center">
            <h3>{product.title}</h3>
            <h1 className="text-wggWhite text-xl">{product.quantity}</h1>
            <img src={product.cover} alt="" className="w-24" />
            <h3>{product.price}</h3>
            <button className="w-full bg-eggWhite px-2" onClick={() => dispatch(decrement(product.id))}>remove</button>
          </div>
        )
      })}

    </div >
  )
}