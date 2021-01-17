import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';
import T from '../../T';

const Input = styled.input`
  ${sharedFormStyles};
`;

const CheckboxField = ({
  value,
  name,
  id,
  labelText,
  onChange,
  rules,
  width,
}) => (
  <>
    <Input
      type="checkbox"
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
      width={width}
    />
    <label htmlFor={id}>
      {' '}
      <T id={labelText} />{' '}
    </label>
  </>
);

CheckboxField.defaultProps = {
  value: '',
  labelText: '',
  id: '',
  onChange: () => {},
  width: 'auto',
  rules: '',
};

CheckboxField.propTypes = {
  value: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.any,
  width: PropTypes.string,
};
export default CheckboxField;
