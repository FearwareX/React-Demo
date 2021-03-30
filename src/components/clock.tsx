import { Component, FC } from 'react';

interface Prop {
  state: {
    timer: Date;
  };
}
class Clock extends Component {
  constructor(props: Prop) {
    super(props);
    this.state = {
      timer: new Date()
    };
  }

  componentDidMount(): void {
    this.timer = setInterval(() => {
      this.trick();
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  trick(): void {
    this.setState({
      timer: new Date()
    });
  }

  render(): FC {
    const { timer } = this.state;
    return (
      <div>
        <div>{timer.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export { Clock };
