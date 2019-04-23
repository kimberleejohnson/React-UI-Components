import React from 'react';
import './Button.css';

// Step two: create a function for our component

const NumberButton = props => {
    return (
        <div className="number-button">
            <p className="number-value">{props.numberButtonProp.value}</p>
        </div>
    )
}

export default NumberButton; 