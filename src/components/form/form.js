import React from 'react';
import Field from './field';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { hasErrorMgs } from '../../utils';

const FieldWrap = styled.div`
  margin-bottom: 30px;
`;

const Form = ({ fields, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });

  const _onSubmit = (data) => {
    if (!Object.keys(errors).length) {
      onSubmit();
    }
  };
  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      {fields.map((field, key) => (
        <FieldWrap key={`${field.name}_${key}`}>
          <Field
            {...field}
            rules={register({
              required: 'Required',
            })}
          />
          {hasErrorMgs(field.name, errors)}
        </FieldWrap>
      ))}
      <button type="submit"> submit </button>
    </form>
  );
};

export default Form;
