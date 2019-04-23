import React from 'react';
import './Button.css';

// Step two: create a function for our component

const NumberButton = props => {
    return (
        <div className="number-botton">
            <p>{props.numberButtonProp.value}</p>
        </div>
    )
}

export default NumberButton; 