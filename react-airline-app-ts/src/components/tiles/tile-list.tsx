import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import Tile from './tile-list-item';
import { AirlineData } from '../../api/airline';

type TileListProps = {
  airlineData: AirlineData[]
}

const TileList: FunctionComponent<TileListProps> = ({ airlineData }: TileListProps) => {
  return (
    <div className="tile-list">
      {airlineData.map((i: AirlineData) => {
        return (
          <Tile data={i} key={i.code}/>
        )
      })}
      {airlineData.length === 0  && <span>Loading ...</span>}
    </div>
  )
}

export default TileList;