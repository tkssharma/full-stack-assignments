import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from '../slices/product-slice';
import Product from './product-tile';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(fetchAsyncProducts())
  }, [])

  console.log(products)
  return (
    <div className="grid grid-cols-4 gap-4">
      {products && products.map((product) => {
        return (
          <Product product={product} key={product.id} />
        )
      })}
    </div>
  )
}