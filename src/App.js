/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router/router';
import './App.less';
import './index.less';

function App() {
  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
