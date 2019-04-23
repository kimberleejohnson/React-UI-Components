import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer'; 
// import ActionButton from './components/ButtonComponents/ActionButton'; 

const App = () => {
  return (
    <div className="calc-container">
      <Display /> 
      <ButtonContainer /> 
    </div>
  );
};

export default App;
