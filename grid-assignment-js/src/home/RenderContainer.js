/* eslint-disable no-unused-vars */
import React from 'react';
import SearchBarComponent from './searchBar';
import ServerGrid from '../ServerIncidents/serverGrid';
import ConatinerContext from '../context/containerContext';
import ApplicationContainer from './Container';
import NavBar from '../navbar/navbar';

const RenderImagery = props => {
  return (
    <ApplicationContainer>
      <ConatinerContext.Consumer>
        {context => (
          <React.Fragment>
            <NavBar />
            <SearchBarComponent />
            <ServerGrid
              loading={context.state.loading}
              data={context.state.purchase}
            />
          </React.Fragment>
        )}
      </ConatinerContext.Consumer>
    </ApplicationContainer>
  );
};

export default RenderImagery;
