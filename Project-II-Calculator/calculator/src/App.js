import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer'; 
import OperatorsContainer from './components/ButtonComponents/OperatorsContainer'; 
// import ActionButton from './components/ButtonComponents/ActionButton'; 

const App = () => {
  return (
    <div className="calc-container">
      <Display /> 
      <ButtonContainer /> 
      <OperatorsContainer /> 
    </div>
  );
};

export default App;
