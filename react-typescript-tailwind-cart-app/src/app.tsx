import React from 'react';
import Navbar from './components/header';
import Shop from './components/shop';

const App = () => {
  return (
    <div className="font-sans bg-eggWhite box-border">
      <div className="container mx-auto">
        <Navbar />
        <Shop />
      </div>
    </div>
  );
};

export default App;
