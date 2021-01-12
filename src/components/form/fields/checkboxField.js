import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';

const Input = styled.input`
  ${sharedFormStyles};
`;

const CheckboxField = ({ value, name, id, labelText, onChange, rules }) => (
  <>
    <Input
      type="checkbox"
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
    />
    <label htmlFor={id}> {labelText} </label>
  </>
);

CheckboxField.defaultProps = {
  value: '',
  labelText: '',
  id: '',
  onChange: () => {},
};

CheckboxField.propTypes = {
  value: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.any.isRequired,
};
export default CheckboxField;
