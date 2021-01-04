import {Component} from 'react'
class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {
      timer: new Date()
    }
  };

  componentDidMount(){
    this.timer = setInterval(
      ()=>{
        this.trick()
      },1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  trick(){
    this.setState({
      timer: new Date()
      
    })
  }

  render(){
    return (
      <div>
        <div>{ this.state.timer.toLocaleTimeString() }</div>
      </div>
    )
  }
}

export { Clock }