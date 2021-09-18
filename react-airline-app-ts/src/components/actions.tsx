import React, { FunctionComponent, useContext, useState } from 'react'; // importing FunctionComponent
import { AirLineAppContext } from '../context/airline-context';

const Actions: FunctionComponent<{}> = () => {
  const { applyFilter } = useContext(AirLineAppContext);
   const [filter, setFilter] = useState({
      type: ''
   })
   const changeFilter = (e: any) => {
     const {id, checked} = e.target;
         if(checked) {
          setFilter({type: id});
          applyFilter(id);
         } else {
          setFilter({type: 'reset'});
           applyFilter('reset');
         }
   }
  return (
    <>
      <h1 className="heading">Airlines</h1>
      <div className="action-container">
        <h1 className="sub-heading">Filter By Alliances</h1>
        <span className="label-new">
          <ul className="list-container">
            <li className="list-item">
              <input onClick={changeFilter} id="OW" checked={filter.type === 'OW'} type="checkbox" />
              <label className="item-label" >
                OneWorld
              </label>
            </li>

            <li className="list-item">
              <input id="ST" onClick={changeFilter} checked={filter.type === 'ST'}  type="checkbox" />
              <label className="item-label" >
                Sky Team
              </label>
            </li>

            <li className="list-item">
              <input id="SA" onClick={changeFilter} checked={filter.type === 'SA'}   type="checkbox" />
              <label className="item-label" >
                Star Alliance
              </label>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default Actions;
