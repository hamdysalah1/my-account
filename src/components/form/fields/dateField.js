import React from 'react';
import parseISO from 'date-fns/parseISO';
import styled from 'styled-components';
import { sharedFormStyles } from '../../../styles/formStyles';

const Input = styled.input`
  ${sharedFormStyles}
`;

const DateField = ({
  value,
  name,
  id,
  labelText,
  onChange,
  minDate,
  maxDate,
  rules,
}) => {
  return (
    <>
      <label htmlFor={id}> {labelText} </label>
      <Input
        type="date"
        name={name}
        id={id}
        defaultValue={value}
        onChange={onChange}
        minDate={minDate && parseISO(minDate)}
        maxDate={maxDate && parseISO(maxDate)}
        ref={rules}
      />
    </>
  );
};

export default DateField;
