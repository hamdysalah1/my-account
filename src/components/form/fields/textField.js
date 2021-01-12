import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';

const Input = styled.input`
  ${sharedFormStyles};
`;

const TextField = ({ value, name, id, labelText, onChange, rules }) => (
  <>
    <Input
      type="text"
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
      required
    />
    <label htmlFor={id}> {labelText} </label>
  </>
);

TextField.defaultProps = {
  value: '',
  labelText: '',
  id: '',
  onChange: () => {},
};

TextField.propTypes = {
  value: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.any.isRequired,
};
export default TextField;
