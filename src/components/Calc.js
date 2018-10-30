import React from 'react';
import CalcOutput from './CalcOutput';
import CalcInput from './CalcInput';

let operators = {
    "+": (a,b)=> Math.round((a + b) * 100) / 100,
    "-": (a,b)=> Math.round((a - b) * 100) / 100,
    "/": (a,b)=> Math.round((a / b) * 100) / 100,
    "*": (a,b)=> Math.round((a * b) * 100) / 100
}

export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVal: '',
            totalVal: ''
        }
    }
    addNum=event=> {
        let num = event.target.value;
        
        if(!operators[this.state.currentVal]) {
        this.setState(state=> ({
            currentVal: `${state.currentVal}${num}`,
            totalVal : `${state.totalVal}${num}`
        }))
        } else {
            this.setState(state=> ({
                currentVal: `${num}`,
                totalVal : `${state.totalVal}${num}`
            }))
        }
    }
    addOperator=event=> {
        if(this.state.totalVal === '') return;
        let lastChar= this.state.totalVal[this.state.totalVal.length - 1];
        
        let operator= event.target.value;
        if(!operators[lastChar]) {
            let newTotalVal = `${this.state.totalVal}${operator}`;
            this.setState(state=> ({
                currentVal: operator,
                totalVal: newTotalVal
            }))
        } else {
            let newTotalVal = `${this.state.totalVal.slice(0,-1)}${operator}`;
            this.setState(state=> ({
                currentVal: operator,
                totalVal: newTotalVal
            }))
        }
    }
    addDot=()=> {
        
        if(this.state.currentVal.indexOf('.') > -1) return;
        if(this.state.currentVal === "" || operators[this.state.currentVal]) {
            this.setState(state=> ({
                totalVal: `${state.totalVal}0.`,
                currentVal: '0.'
            }));
            return
        } else {
            this.setState(state=> ({
                totalVal: `${state.totalVal}.`,
                currentVal: `${state.currentVal}.`
            }))
        }
    }
    clearAll=()=> {
        this.setState(()=>({
            currentVal: "",
            totalVal: ""
        }))
    }
    clear=()=> {
        let index = this.state.totalVal.lastIndexOf(this.state.currentVal);
        let newTotalVal = this.state.totalVal.slice(0,index);
        this.setState(()=> ({
            currentVal: "",
            totalVal: newTotalVal
        }))
    }
    calculate=()=> {
       let numsArr = this.state.totalVal.match(/[\w\.]+/g).map(i=> +i);
       let operatorsArr = this.state.totalVal.match(/[-*/+]/g);
       if(operators[this.state.currentVal]) {
           this.setState(state=> ({
               currentVal: "",
               totalVal: state.totalVal.slice(0,-1)
           }));
           operatorsArr = operatorsArr.slice(0,-1);
       }
       let result = numsArr.reduce((a,b,i)=> {
           let prop = operatorsArr[i - 1];
           return operators[prop](a,b);
       });
       this.setState(()=> ({
           currentVal: `${result}`,
           totalVal: `${result}`
       }))
    }

    render() {
        return (
            <div className="myCalc">
                <CalcOutput total={this.state.totalVal} current={this.state.currentVal}/>
                <CalcInput addNum={this.addNum} addOperator={this.addOperator}
                clearAll={this.clearAll} clear={this.clear}
                addDot={this.addDot} calculate={this.calculate} />
            </div>
        )
    }
}