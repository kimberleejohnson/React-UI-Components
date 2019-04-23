import React from 'react'; 
import Operator from './Operator'; 

const divide = {
    symbol: "÷"
}

const multiply = {
    symbol: "x"
}

const minus = {
    symbol: "-"
}

const add = {
    symbol: "+"
}

const equals = {
    symbol: "="
}

function Operators () {
    return (
        <div className="operators-container">
            <Operator operatorProp={divide} />
            <Operator operatorProp={multiply} />
            <Operator operatorProp={minus} />
            <Operator operatorProp={add} />
            <Operator operatorProp={equals} />
        </div>
    ); 
}

export default Operators; 
