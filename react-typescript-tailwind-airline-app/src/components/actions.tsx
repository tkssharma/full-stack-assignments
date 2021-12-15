import React, { FunctionComponent, useContext, useState } from 'react';
import { AirlineAppContext } from '../context/airline-context';

const Actions: FunctionComponent<{}> = () => {
  const { applyFilter } = useContext(AirlineAppContext);
  const [filter, setFilter] = useState({
    type: '',
  });

  const changeFilter = (e: any) => {
    const { id, checked } = e.target;
    if (checked) {
      setFilter({ type: id });
      applyFilter(id);
    } else {
      setFilter({ type: 'reset' });
      applyFilter('reset');
    }
  };

  return (
    <div className="container flex flex-col justify-center">
      <h4 className="p-4 text-xl text-center">Filters</h4>
      <div className="container justify-center flex mx-auto">
        <div className="p-4">
          <input checked={filter.type === 'OW'} type="checkbox" id="OW" onClick={changeFilter} />
          <span className="pl-1">OneWorld </span> 
        </div>
        <div className="p-4">
          <input checked={filter.type === 'ST'} type="checkbox" id="ST" onClick={changeFilter} />
          <span className="pl-1">Sky Team</span>
        </div>

        <div className="p-4">
          <input  checked={filter.type === 'SA'} type="checkbox" id="SA" onClick={changeFilter} />
           <span className="pl-1">Star Alliance</span>
        </div>
      </div>
    </div>
  );
};

export default Actions;
