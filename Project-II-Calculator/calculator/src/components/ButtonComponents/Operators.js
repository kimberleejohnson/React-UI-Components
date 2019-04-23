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
        <div>
            <Operator operatorProp={divide} />
        </div>
    ); 
}

export default Operators; 
