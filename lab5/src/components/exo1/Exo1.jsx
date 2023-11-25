import React, { useState } from 'react';
import ClickButton from './ClickButton';
import GoBackButton from '../GoBackButton';

const Exo1 = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [counter, setCounter] = useState(0);

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <GoBackButton/>

      <div className="buttons-container">
        <div className="flexdiv">
          <ClickButton onClick={() => handleButtonClick(1)} />
          <ClickButton onClick={() => handleButtonClick(2)} />
          <ClickButton onClick={() => handleButtonClick(3)} />
        </div>
        
        <p>{clickedButton ? `Le bouton n°${clickedButton} a été cliqué` : 'Il n\'y a pas de bouton cliqué'}</p>
      </div>

      <div className='line'></div>

      <div className="counter-container">
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
      </div>
    </div>
  );
};

export default Exo1;
