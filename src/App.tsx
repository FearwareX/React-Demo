import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router/router';

const App: FC = (): ReactElement => {
  return <Router>{renderRoutes(routes)}</Router>;
};

export default App;
