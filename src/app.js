/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import ErrorBoundary from './errorBoundary';
import { HOME, PROFILE } from './constants/routers';
import { ProtectedRoute } from './helper';
import { useAuth } from './hooks';
import GlobalStyle from './globalStyle';

const App = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useAuth();
  /**
   * TODO: save the lang to local storage in first visit and redirect to user user lang
   */
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" children={<Redirect to="/en/" />} />
          <Route exact path={HOME} children={<Home {...props} />} />
          <ProtectedRoute
            user={useAuth.isAuthenticated}
            path={PROFILE}
            children={<Profile {...props} />}
          />
          <Route
            path="*"
            children={<ErrorBoundary error="404" errorInfo="Page not found" />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
