import React from 'react';
import styled from 'styled-components';
import { sharedFormStyles } from '../../../styles/formStyles';

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
}) => {
  return (
    <>
      <label htmlFor={id}> {labelText} </label>
      <Select
        name={name}
        id={id}
        defaultValue={value}
        onChange={onChange}
        ref={rules}
      >
        <option value=""> -- Select -- </option>
        {options.map((option, key) => {
          return (
            <option value={option[0]} key={`${option[0]}_${key}`}>
              {' '}
              {option[1]}{' '}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default SelectField;
