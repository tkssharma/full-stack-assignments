import React from "react";
import Header from './components/header';
import Product from './components/products';
import Cart from './components/cart';

export default function App() {

  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-row">
        <div className="w-3/4 m-4">  <Product /></div>
        <div className="w-1/4 m-4">  <Cart /></div>
      </div>
    </>
  )
}