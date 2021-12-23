import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';

const App = () => {
  return (
    <div className="box-border">
      <div className="flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
