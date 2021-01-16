/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home, Profile, SignUp, ForgotPassword } from './pages';
import ErrorBoundary from './errorBoundary';
import { PROFILE, SIGN_UP, FORGOT_PASSWORD } from './constants';
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
          <Route exact path="/:lang/" children={<Home {...props} />} />
          <Route
            exact
            path={`/:lang/${SIGN_UP}`}
            children={<SignUp {...props} />}
          />
          <Route
            exact
            path={`/:lang/${FORGOT_PASSWORD}`}
            children={<ForgotPassword {...props} />}
          />
          <ProtectedRoute
            user={useAuth.isAuthenticated}
            path={`/:lang/${PROFILE}`}
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
