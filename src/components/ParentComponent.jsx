import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              greet:"Hello Jeff"
         }
         this.clickHandler = this.clickHandler.bind(this)
     }

     clickHandler = (childName)=>{
       
        alert(`Hello ${childName}`);
     }
     
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.clickHandler}/>
                {/* <h1>{this.state.greet}</h1> */}
                {/* <button onClick ={this.clickHandler}>Greet</button> */}
            </div>
        )
    }
}

export default ParentComponent
