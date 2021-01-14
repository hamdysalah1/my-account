import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { FacebookIcon, GoogleIcon } from '../icons';
import { Facebook, Google } from './styles/socialButtonsStyle';

const SocialButtons = ({ children }) => children;

SocialButtons.Facebook = ({ facebookCallback }) => (
  <FacebookLogin
    appId="194930852365253"
    fields="name,email,picture"
    callback={facebookCallback}
    render={(renderProps) => (
      <Facebook onClick={renderProps.onClick}>
        <FacebookIcon />
        <p> Facebook </p>
      </Facebook>
    )}
  />
);

SocialButtons.Google = ({ googleCallback }) => (
  <GoogleLogin
    clientId="438862412053-3hudbi6sfk8o7jbfon3uuiosec5lld28.apps.googleusercontent.com"
    render={(renderProps) => (
      <Google onClick={renderProps.onClick} disabled={renderProps.disabled}>
        <GoogleIcon />
        <p> Google </p>
      </Google>
    )}
    buttonText="Login"
    onSuccess={googleCallback}
    onFailure={googleCallback}
    cookiePolicy="single_host_origin"
  />
);

SocialButtons.propTypes = {
  children: PropTypes.element.isRequired,
};
SocialButtons.Facebook.propTypes = {
  facebookCallback: PropTypes.func.isRequired,
};
SocialButtons.Google.propTypes = {
  googleCallback: PropTypes.func.isRequired,
};

export default SocialButtons;
