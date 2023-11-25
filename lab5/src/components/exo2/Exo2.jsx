import React from 'react';
import DisplayTab from './DisplayTab';
import GoBackButton from '../GoBackButton';


const Exo2 = () => {
  const firstTab = ["apple", "orange", "banana"];
  const secondTab = ["car", "bus", "bike"];

  return (
    <div className="container">
      <GoBackButton/>

      <div>
        <h2>DisplayTab 1:</h2>
        <DisplayTab tab={firstTab} />
      </div>

      <div className='line'></div>

      <div>
        <h2>DisplayTab 2:</h2>
        <DisplayTab tab={secondTab} />
      </div>
    </div>
  );
};

export default Exo2;
