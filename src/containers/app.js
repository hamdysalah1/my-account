/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Insurance from '../pages/insurance';

import ErrorBoundary from './errorBoundary';

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" children={<Home {...props} />} />
      <Route exact path="/:country/:lang/insurance" children={<Insurance {...props} />} />
      <Route
        path="*"
        children={<ErrorBoundary error="404" errorInfo="Page not found" />}
      />
    </Switch>
  </Router>
);

export default App;
