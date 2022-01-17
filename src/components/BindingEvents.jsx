import React, { Component } from 'react'

 class BindingEvents extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"Hello"
         }
         this.onClick = this.onClick.bind(this) //binding happens only once as compared to the render method
     }
     onClick = ()=>{
         this.setState({
             message:"Goodbye"
         })
     }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {()=>this.onClick()}>Click</button> */}
                <button onClick = {this.onClick}>Click</button>
            </div>
        )
    }
}

export default BindingEvents
