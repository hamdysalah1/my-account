import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';

const Input = styled.input`
  ${sharedFormStyles};
`;

const PasswordField = ({ value, name, id, labelText, onChange, rules }) => (
  <>
    <label htmlFor={id}> {labelText} </label>
    <Input
      type="password"
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
    />
  </>
);

PasswordField.defaultProps = {
  value: '',
  labelText: '',
  id: '',
  onChange: () => {},
};

PasswordField.propTypes = {
  value: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.any.isRequired,
};
export default PasswordField;
