
import React, {FunctionComponent , useContext} from 'react';
import { AirlineAppContext } from '../context/airline-context';
import Actions from './actions';
import HeaderComp from './header';
import TileList from './tiles/tile-list';

const LandingPage: FunctionComponent <{}>  = () => {
  const {AirlineData} = useContext(AirlineAppContext);

  return (
    <>
    <HeaderComp />
    <Actions />
    <TileList airlineData={AirlineData} />
    </>
  )
}

export default LandingPage;