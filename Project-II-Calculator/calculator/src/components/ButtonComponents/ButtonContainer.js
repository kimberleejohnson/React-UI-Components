import React from 'react';

import ActionButton from './ActionButton'; 
import NumbersContainer from './NumbersContainer'; 

import './Button.css';

const ButtonContainer = () => {
    return (
      <div className="button-container">
        <ActionButton />
        <NumbersContainer /> 
        <ActionButton />  
      </div>
    );
  };
  
  export default ButtonContainer;