import React, { Fragment } from 'react';
import {Products} from '../data/app-const';
import ProductTile from './tile';

const Shop = () => {
  return (
    <div className="grid grid-row-auto">
      <div className="grid grid-cols-1">
        <div
          className="bg-gradient-to-r from-lightningYellow via-treePoppy
       to-goldenTainoi h-96 shadow-lg my-8 rounded-lg pt-12 p-12"
        >
          <div className="grid grid-cols-3 items-center">
            <div className="font-bold">
              <a href="">Home</a>
              <a href="">/Shopping</a>
              <a href="">/Products</a>
            </div>

            <div className="text-center text-4xl font-bold">Shopping Cart</div>

            <div className="flex justify-end items-center">
              <span className="font-bold px-8">Showing 1 of 40</span>
              <span>
                <select>
                  <option value="1">Hello</option>
                  <option value="2">Hello</option>
                  <option value="3">Hello</option>
                  <option value="4">Hello</option>
                </select>
              </span>
            </div>
          </div>
        </div>
     
      <div className="grid grid-cols-3 -mt-80">
         {
           Products.map((product: any) => {
             return (
               <Fragment key={product.id}>
                   <ProductTile product={product} />
               </Fragment>
             )
           })
         }
      </div>
      </div>
    </div>
  );
};

export default Shop;
