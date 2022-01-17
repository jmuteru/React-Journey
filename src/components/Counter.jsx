import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state = {

            count: 0
        }
    }
    calculate (){
        this.setState({
            count  : this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick = {()=>this.calculate()}>Calculate</button>
            </div>
        )
    }
}

export default Counter
