import React from 'react';
class Sumdemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errmsg: {},
            no1: '',
            no2: '',
            choice: 'add',
            result: ''
        };
    }

    doValidation(){
        const {no1, no2} = this.state
        var temperr = {}
        var isValid = true

        if (!no1){
            temperr.txt1 = "Enter No1"
            isValid = false
        } else if(isNaN(no1)){
            temperr.txt1 = "Enter only Digits in No1"
            isValid = false
        }
        
        if (!no2){
            temperr.txt2 = "Enter No2"
            isValid = false
        } else if(isNaN(no2)){
            temperr.txt2 = "Enter only Digits in No2"
            isValid = false
        }
        
        this.setState({errmsg: temperr})
        return isValid
    }

    doSum(){
        var ans = this.doValidation()
        if(ans){
            var c = parseInt(this.state.no1) + parseInt(this.state.no2)
            this.setState({result: c})
        } else {
            this.setState({result: ''})
        }
    }

    doProcess(){
        var isValid = this.doValidation()
        if(isValid){
            var num1 = parseInt(this.state.no1)
            var num2 = parseInt(this.state.no2)
            var result
            
            if(this.state.choice === 'add'){
                result = num1 + num2
            } else if(this.state.choice === 'sub'){
                result = num1 - num2
            }
            
            this.setState({result: result})
        } else {
            this.setState({result: ''})
        }
    }

    handleChoiceChange(value){
        this.setState({choice: value})
    }
    render(){
        return(
            <>
                <h1>Calculator</h1>
                No1: <input 
                    type='text' 
                    value={this.state.no1}
                    onChange={(e) => this.setState({no1: e.target.value})}
                />
                <br/>
                <p style={{color:'red'}}>{this.state.errmsg.txt1}</p>
                <br/>
                No2: <input 
                    type='text' 
                    value={this.state.no2}
                    onChange={(e) => this.setState({no2: e.target.value})}
                />
                <br/>
                <p style={{color:'red'}}>{this.state.errmsg.txt2}</p>
                <br/>
                
                Choice:
                <input
                    type="radio"
                    onChange={() => this.handleChoiceChange("add")}
                    name="operation"
                    value="add"
                    checked={this.state.choice === "add"}
                /> Add
                
                <input
                    type="radio"
                    onChange={() => this.handleChoiceChange("sub")}
                    name="operation"
                    value="sub"
                    checked={this.state.choice === "sub"}
                /> Subtract
                <br />
                <br />
                <button onClick={this.doProcess.bind(this)}>Calculate</button>
                <br />
                <br />
                <div style={{fontSize: '20px', fontWeight: 'bold'}}>
                    {this.state.result !== '' && `Result: ${this.state.result}`}
                </div>
            </>
        );
    }
}

export default Sumdemo