import React from 'react';

 const CalcInput = props =>  (
    <div className="myCalc-input">
        <button className="myCalc-button myCalc-button-double" onClick={props.clearAll}>AC</button>
        <button className="myCalc-button" onClick={props.clear}>C</button>
        <button className="myCalc-button" onClick={props.addOperator} value="+">+</button>
        <button className="myCalc-button" onClick={props.addNum} value="9">9</button>
        <button className="myCalc-button" onClick={props.addNum} value="8">8</button>
        <button className="myCalc-button" onClick={props.addNum} value="7">7</button>
        <button className="myCalc-button" onClick={props.addOperator} value="-">-</button>
        <button className="myCalc-button" onClick={props.addNum} value="6">6</button>
        <button className="myCalc-button" onClick={props.addNum} value="5">5</button>
        <button className="myCalc-button" onClick={props.addNum} value="4">4</button>
        <button className="myCalc-button" onClick={props.addOperator} value="*">*</button>
        <button className="myCalc-button" onClick={props.addNum} value="3">3</button>
        <button className="myCalc-button" onClick={props.addNum} value="2">2</button>
        <button className="myCalc-button" onClick={props.addNum} value="1">1</button>
        <button className="myCalc-button" onClick={props.addOperator} value="/">/</button>
        <button className="myCalc-button" onClick={props.addNum} value="0">0</button>
        <button className="myCalc-button" onClick={props.addDot}>.</button>
        <button className="myCalc-button myCalc-button-double" onClick={props.calculate}>=</button>
    </div>
    )


export default CalcInput;