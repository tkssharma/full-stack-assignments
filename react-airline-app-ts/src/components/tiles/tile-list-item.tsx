import React, { FunctionComponent, useState } from 'react'; // importing FunctionComponent
import { AirlineData } from '../../api/airline';

type TileProps = {
  data: AirlineData,
}

export const Tile: FunctionComponent<TileProps> = ({ data }: TileProps) => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
     setHover(true);
  }
  const handleMouseOut = () => {
    setHover(false);
  }

  return (
    <div onMouseOver={handleMouseHover}  onMouseOut={handleMouseOut} className="tile-card">
    <div className="logo-holder">
       <img src={`https://www.kayak.com/${data.logoURL}`} /> 
       <div className="tile-data">
          <div className="tile-name">{data.name} </div>
       { hover && (<>
       <div className="tile-phone">{data.phone}</div>
       <div className="tile-alliance">{data.alliance}</div>
       <div className="tile-website">{data.site}</div></>) }
       </div>
    </div>
  </div>
  
  )
}

export default Tile;