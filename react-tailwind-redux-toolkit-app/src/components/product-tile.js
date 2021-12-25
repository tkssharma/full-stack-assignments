import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../slices/cart-slice';
export default function ProductTile({ product }) {
  const dispatch = useDispatch();

  return (
    <div
      class="border-0 bg-gray-100  items-center flex flex-col"
    >
      <img src={product.cover} alt="" className="w-48" />
      <span>{product.price}</span>
      <span>{product.title}</span>
      <button className="p-2 w-full bg-waterloo border-2 px-2 text-gray-200 text-xl bg-hitPink-500" onClick={() => dispatch(addToCart(product))}>Add</button>
    </div>
  )
}