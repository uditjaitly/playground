import React from 'react'

class Counter extends React.Component{
 
  constructor(props){
    super(props);
    this.state={counter:0}
  }

  clickHandler=()=>{
    this.setState(()=>{
      return{
        counter:this.state.counter+1
      }
    })
  }
  
  render(){
    return(
      <div>
        <h1>Counter={this.state.counter}</h1>
        <br></br>
        <button onClick={this.clickHandler}>Add to Counter</button>
      </div>
    )
  }


}

export default Counter;
