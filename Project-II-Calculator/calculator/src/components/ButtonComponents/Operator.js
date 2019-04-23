// Step one: import React
import React from "react";

// Step two: create a function for our component

const Operator = props => {
    return (
        <div className="operator-box">
            <p>{props.operatorProp.symbol}</p>
        </div>
    )
}

export default Operator; 