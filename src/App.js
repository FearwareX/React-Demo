/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from 'antd';
import logo from './images/logo.svg';
import { Test } from './components/test';
import { Clock } from './components/clock';
import { MySlot } from './components/slot';
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="primary">Learn React</Button>
        </a>

        <Test />

        <Clock />

        <MySlot>
          <div data-name="header">头部</div>
          <div data-name="main">主体</div>
          <div data-name="footer">尾部</div>
        </MySlot>
      </header>
    </div>
  );
}

export default App;
