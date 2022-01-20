import React, { Component } from 'react';

 class ConditionalRender extends Component {
     constructor(props){
         super(props)

         this.state ={
             isLoggedIn : true
         }
     }
  render() {
    /*Render using if else... *****/
    //   if (this.state.isLoggedIn) {
    //       return <div>Welcome Jeff</div>
    //   }
    //   else{
    //       return <div>Welcome Guest</div>
    //   }
    return (
    <div>{ 
      // Render by using the ternery operator
       this.state.isLoggedIn ? <div>Welcome Jeff</div> : <div>Hello Guest</div>
  }</div>

    )
  }
}

export default ConditionalRender;
