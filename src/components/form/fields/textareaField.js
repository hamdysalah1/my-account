import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';

const Textarea = styled.textarea`
  ${sharedFormStyles}
`;
const TextareaField = ({ value, name, id, labelText, onChange, rules }) => (
  <>
    <label htmlFor={id}> {labelText} </label>
    <Textarea
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
    />
  </>
);

TextareaField.defaultProps = {
  value: '',
  labelText: '',
  id: '',
  onChange: () => {},
};

TextareaField.propTypes = {
  value: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.any.isRequired,
};

export default TextareaField;
