import React from 'react';

const navBar = function() {
  return (
    <div className="main-container">
      <div className="logo-img-container">
        <a className="logo-img-link" href="/"></a>
        <span style={{ cursor: 'pointer' }} className="site-name">
          {' '}
          Technology{' '}
        </span>
      </div>
    </div>
  );
};
export default navBar;
