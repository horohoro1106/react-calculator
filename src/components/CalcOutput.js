import React from 'react';

const CalcOutput = props => (  
    <div className="myCalc-output">
        <p className="myCalc-fullEval">{props.total}</p>
        <p className="myCalc-currentVal">{props.current}</p>
    </div>
)

export default CalcOutput;