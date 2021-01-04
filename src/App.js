import logo from './images/logo.svg';
import { Button } from 'antd'
import { Test } from './components/test.jsx'
import { Clock } from './components/clock.jsx'
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
      </header>
    </div>
  );
}

export default App;
