import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';
import T from '../../T';

const Select = styled.select`
  ${sharedFormStyles}
`;

const SelectField = ({
  value,
  name,
  id,
  labelText,
  onChange,
  options,
  rules,
}) => (
  <>
    <label htmlFor={id}>
      {' '}
      <T id={labelText} />{' '}
    </label>
    <Select
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      ref={rules}
    >
      <option value=""> -- Select -- </option>
      {options.map((option, key) => (
        <option value={option[0]} key={`${option[0]}_${name}`}>
          {' '}
          {option[1]}{' '}
        </option>
      ))}
    </Select>
  </>
);

SelectField.defaultProps = {
  value: '',
  labelText: '',
  id: '',
  onChange: () => {},
  options: '',
};

SelectField.propTypes = {
  value: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  rules: PropTypes.any.isRequired,
};

export default SelectField;
