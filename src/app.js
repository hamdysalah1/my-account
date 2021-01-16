/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import React, { useContext } from 'react';
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
import { GlobalContext } from './context';

const App = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useAuth();
  const [{ lang }] = useContext(GlobalContext);
  /**
   * TODO: save the lang to local storage in first visit and redirect to user user lang
   */
  return (
    <>
      <Router>
        <GlobalStyle lang={lang} />
        <Switch>
          <Route exact path="/" children={<Redirect to="/en/" />} />
          <Route
            exact
            path="/:lang/"
            children={<Home lang={lang} {...props} />}
          />
          <Route
            exact
            path={`/:lang/${SIGN_UP}`}
            children={<SignUp lang={lang} {...props} />}
          />
          <Route
            exact
            path={`/:lang/${FORGOT_PASSWORD}`}
            children={<ForgotPassword lang={lang} {...props} />}
          />
          <ProtectedRoute
            user={useAuth.isAuthenticated}
            path={`/:lang/${PROFILE}`}
            children={<Profile lang={lang} {...props} />}
          />
          <Route
            path="*"
            children={<ErrorBoundary error="404" lang={lang} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
