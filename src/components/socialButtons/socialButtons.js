import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

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

SocialButtons.Google = () => (
  <Google>
    <GoogleIcon />
    <p> Google </p>
  </Google>
);

SocialButtons.propTypes = {
  children: PropTypes.element.isRequired,
};
SocialButtons.Facebook.propTypes = {
  facebookCallback: PropTypes.func.isRequired,
};

export default SocialButtons;
