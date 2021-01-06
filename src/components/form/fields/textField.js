import React from 'react';
import styled from 'styled-components';
import { sharedFormStyles } from '../../../styles/formStyles';

const Input = styled.input`
  ${sharedFormStyles};
`;

const TextField = ({ value, name, id, labelText, onChange, rules }) => {
  return (
    <>
      <label htmlFor={id}> {labelText} </label>
      <Input
        type="text"
        name={name}
        id={id}
        defaultValue={value}
        onChange={onChange}
        ref={rules}
      />
    </>
  );
};

export default TextField;
