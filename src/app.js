/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import ErrorBoundary from './errorBoundary';
import { HOME, SIGN_IN, SIGN_UP, PROFILE } from './constants/routers';
import { ProtectedRoute } from './helper';
import { useAuth } from './hooks';

const App = (props) => {
  const { user } = useAuth();
  console.log('user', user);
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} children={<Home {...props} />} />
        <ProtectedRoute
          user={user}
          path={PROFILE}
          children={<Profile {...props} />}
        />
        <Route
          path="*"
          children={<ErrorBoundary error="404" errorInfo="Page not found" />}
        />
      </Switch>
    </Router>
  );
};

export default App;
