import React, { Component } from 'react';
import { Button } from 'antd';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  add(size) {
    let { value } = this.state;
    value += size;
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Button onClick={(e) => this.add(10, e)}>
        当前:
        {value}
        点击增加
      </Button>
    );
  }
}

export { Test };
