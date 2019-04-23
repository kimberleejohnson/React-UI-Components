import React from 'react'; 
import NumberButton from './NumberButton'; 

const one = {
    value: "1"
}

const two = {
    value: "2"
}

const three = {
    value: "3"
}

const four = {
    value: "4"
}

const five = {
    value: "5"
}

const six = {
    value: "6"
}

const seven = {
    value: "7"
}

const eight = {
    value: "8"
}

const nine = {
    value: "9"
}

function NumberButtons () {
    return (
        <div>
            <NumberButton numberButtonProp={one} />
            <NumberButton numberButtonProp={two} />
            <NumberButton numberButtonProp={three} />
            <NumberButton numberButtonProp={four} />
            <NumberButton numberButtonProp={five} />
            <NumberButton numberButtonProp={six} />
            <NumberButton numberButtonProp={seven} />
            <NumberButton numberButtonProp={eight} />
            <NumberButton numberButtonProp={nine} />
        </div>
    )
}

export default NumberButtons; 