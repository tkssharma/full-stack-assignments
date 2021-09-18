import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import logo from '../assets/logo.svg';
const HeaderComp: FunctionComponent<{}> = () => {
  return (
    <div className="header-container">
          <div className="branding">
            <img src={logo} />
          </div>
    </div>
  )
}

export default HeaderComp;