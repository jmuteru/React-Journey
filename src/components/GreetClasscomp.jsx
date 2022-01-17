import React, { Component } from 'react'

export class GreetClasscomp extends Component {
    // constructor(){
    //     super()


    // }
    render() {
        const {name, heroname} = this.props
        // const{state1 ,state2} = this.state
        return (
            <div>
                <h1>He is also known as {name} but his hero name is {heroname}</h1>
            </div>
        )
    }
}

export default GreetClasscomp
