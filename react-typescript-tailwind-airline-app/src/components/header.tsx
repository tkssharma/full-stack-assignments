import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import logo from '../assets/logo.svg';
const HeaderComp: FunctionComponent<{}> = () => {
  return (
    <div className="container flex p-4 mx-auto bg-indigo-100	">
          <div className="branding">
            <img className="w-24 h-8" src={logo} alt="" />
          </div>
    </div>
  )
}

export default HeaderComp;