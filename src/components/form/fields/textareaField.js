import React from 'react';
import styled from 'styled-components';
import { sharedFormStyles } from '../../../styles/formStyles';

const Textarea = styled.textarea`
  ${sharedFormStyles}
`;
const TextareaField = ({ value, name, id, labelText, onChange, rules }) => {
  return (
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
};

export default TextareaField;
