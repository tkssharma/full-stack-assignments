import React, { Fragment } from 'react';

interface IProps {
  product : any
}
const Tile = ({product}: IProps) => {
  return (
    <div className="grid grid-row-4 items-center m-8 rounded p-8 shadow-lg border-2 radial-bg">
     
        <div className="grid grid-cols-1 text-center">
            <img alt="" src={product.thumbnail} className="w-100 px-8"/>
        </div>
        <div className="grid grid-cols-1">
        <a href={product.link} className="transition duration-150 ease-in-out w-max justify-self-center border-b-2 border-gigas border-opacity-0 hover:border-opacity-75">{product.title}</a>

        </div>
        <div className="grid grid-cols-1 text-center">
          <span> $236.00</span>
        </div>
           <div className="grid grid-cols-1 text-center">
             <button className="px-4 m-1 rounded w-full bg-goldenTainoi-300 text-gray-300 border text-xl font-bold">Add Cart</button>
           </div>
    </div>
  );
};

export default Tile;
