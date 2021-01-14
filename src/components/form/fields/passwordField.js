import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';

const Input = styled.input`
  ${sharedFormStyles};
`;

const PasswordField = ({
  value,
  name,
  id,
  labelText,
  onChange,
  rules,
  currentValue,
}) => (
  <>
    <Input
      type="password"
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
      currentValue={currentValue}
    />
    <label htmlFor={id}> {labelText} </label>
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
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
export default PasswordField;
