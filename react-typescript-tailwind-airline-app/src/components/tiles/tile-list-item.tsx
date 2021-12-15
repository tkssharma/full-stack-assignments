
import React, { FunctionComponent, useState } from 'react';
import { AirlineData } from '../../api/airline';

type TileProps = {
  data: AirlineData
}

const Tile: FunctionComponent<TileProps> = ({ data }: TileProps) => {

  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
     setHover(true);
  }
  const handleMouseOut = () => {
    setHover(false);
  }
  return (
    <div className="p-2 w-48 flex flex-col h-48 justify-center rounded border-2" onMouseOver={handleMouseHover} onMouseOut={handleMouseOut} >
       <img className="mx-auto" src={`https://www.kayak.com/${data.logoURL}`} alt="" /> 
      <h6 className="text-center text-sm">{data.name}</h6>
      <h6 className="text-center text-sm">{data.alliance}</h6>
      <h6 className="text-center text-sm">{data.phone}</h6>
      { hover  && <h6>{data.alliance}</h6>}
    </div>

  )
}

export default Tile;