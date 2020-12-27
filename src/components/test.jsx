import { Component } from 'react';

class Test extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
    this.add = this.add.bind(this)
  }
  add(size,e){
    let { value } = this.state;
    value += size;
    this.setState({
      value
    })
  };
  render(){
    return <button type="text" onClick={(e)=>this.add(10,e)}>{this.state.value}</button>
  }
}

export { Test }
