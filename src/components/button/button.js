import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/named
import { Primary, Secondary, Default } from './styles/buttonStyle';

const Button = ({ children }) => children;

Button.Primary = ({ children, onClick, type, fullWidth, fontSize }) => (
  <Primary
    type={type}
    onClick={onClick}
    fullWidth={fullWidth}
    fontSize={fontSize}
  >
    {children}
  </Primary>
);
Button.Secondary = ({ children, onClick, type, fullWidth, fontSize }) => (
  <Secondary
    type={type}
    onClick={onClick}
    fullWidth={fullWidth}
    fontSize={fontSize}
  >
    {children}
  </Secondary>
);
Button.Default = ({ children, onClick, type, fullWidth, fontSize }) => (
  <Default
    type={type}
    onClick={onClick}
    fullWidth={fullWidth}
    fontSize={fontSize}
  >
    {children}
  </Default>
);

Button.Primary.defaultProps = {
  onClick: () => {},
  type: 'button',
  fullWidth: false,
  fontSize: '22',
};
Button.Secondary.defaultProps = {
  onClick: () => {},
  type: 'button',
  fullWidth: false,
  fontSize: '22',
};
Button.Default.defaultProps = {
  onClick: () => {},
  type: 'button',
  fullWidth: false,
  fontSize: '22',
};
Button.propTypes = {
  children: PropTypes.element.isRequired,
};
Button.Primary.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fontSize: PropTypes.string,
};
Button.Secondary.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fontSize: PropTypes.string,
};
Button.Default.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fontSize: PropTypes.string,
};

export default Button;
