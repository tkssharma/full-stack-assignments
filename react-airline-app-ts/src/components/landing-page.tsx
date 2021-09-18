import React, { FunctionComponent, useContext } from 'react'; // importing FunctionComponent
import Actions from './actions';
import HeaderComp from './header';
import TileList from './tiles/tile-list';
import './tiles.scss'
import { AirlineData } from '../api/airline';
import { AirLineAppContext } from '../context/airline-context';
const LandingPage: FunctionComponent<{}> = () => {

  const { AirlineData} = useContext(AirLineAppContext);
  return (
    <div>
        <HeaderComp />
        <div className="body-container">
          <Actions />
          <TileList airlineData={AirlineData}/>
        </div>
    </div>
  )
}

export default LandingPage;