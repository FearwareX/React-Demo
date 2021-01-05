import React, { Component } from 'react';

class MySlot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let headerCom;
    let mainCom;
    let footerCom;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    // eslint-disable-next-line react/prop-types
    children.forEach((item) => {
      switch (item.props['data-name']) {
        case 'header':
          headerCom = item;
          break;
        case 'footer':
          footerCom = item;
          break;
        case 'main':
          mainCom = item;
          break;
        default:
          break;
      }
    });
    return (
      <div style={{ border: 'solid 1px' }}>
        <div>插槽内容</div>
        <div style={{ fontSize: 14 }}>
          <div className="header">{headerCom}</div>
          <div className="main">{mainCom}</div>
          <div className="footer">{footerCom}</div>
        </div>
      </div>
    );
  }
}

export { MySlot };
