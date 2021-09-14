import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import Actions from './actions';
import HeaderComp from './header';
import TileManager from './tiles/tile-manager';
import './tile.css';

const LandingPage: FunctionComponent<{}> = () => {
  return (
    <div>
        <HeaderComp />
        <Actions />
        <TileManager />
    </div>
  )
}

export default LandingPage;