import { Component } from 'react';
import { Button } from 'antd'

class Test extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: 0,
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
    return <Button onClick={(e)=>this.add(10,e)}>当前:{this.state.value}点击增加</Button>
  }
}

export { Test }
