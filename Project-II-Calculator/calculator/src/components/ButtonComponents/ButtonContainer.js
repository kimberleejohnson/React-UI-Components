import React from 'react';

import ActionButton from './ActionButton'; 
import NumbersContainer from './NumbersContainer'; 

import './Button.css';

const clear= {
  text: "clear"
}

const zero= {
  text: "0"
}

const ButtonContainer = () => {
    return (
      <div className="button-container">
        <ActionButton actionButtonProp={clear} />
        <NumbersContainer /> 
        <ActionButton actionButtonProp={zero}/>  
      </div>
    );
  };
  
  export default ButtonContainer;