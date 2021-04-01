import React, { Component, ReactElement } from 'react';

interface IState {
  timeStr: Date;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Time extends Component<{}, IState> {
  readonly state = {
    timeStr: new Date()
  };

  private timer = 0;

  componentDidMount(): void {
    this.timer = setInterval(() => {
      this.setState({
        timeStr: new Date()
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  render(): ReactElement {
    return <div>{this.state.timeStr.toLocaleTimeString()}</div>;
  }
}
