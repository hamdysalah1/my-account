import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';
import T from '../../T';

const Textarea = styled.textarea`
  ${sharedFormStyles}
`;
const TextareaField = ({
  value,
  name,
  id,
  labelText,
  onChange,
  rules,
  currentValue,
}) => (
  <>
    <Textarea
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
      currentValue={currentValue}
    />
    <label htmlFor={id}>
      {' '}
      <T id={labelText} />{' '}
    </label>
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
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};

export default TextareaField;
