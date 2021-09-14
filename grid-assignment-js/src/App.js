import React, { Component } from 'react';
import RenderContainer from './home/RenderContainer';
import './navbar/navbar.scss';
import './home/search-container.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RenderContainer />
      </React.Fragment>
    );
  }
}

export default App;
