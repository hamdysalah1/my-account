/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropType from 'prop-types';
import { useForm } from 'react-hook-form';
import { Field, FieldWrap } from '../components';
import { hasErrorMgs } from '../utils';

const Form = ({ fields, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });

  const ــonSubmit = (data) => {
    if (!Object.keys(errors).length) {
      onSubmit(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(ــonSubmit)}>
      {fields.map((field, key) => (
        <FieldWrap key={`${field.name}`}>
          <Field
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            rules={register(...field.validationRules)}
          />
          {errors && hasErrorMgs(field.name, errors)}
        </FieldWrap>
      ))}
      <button type="submit"> submit </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropType.func.isRequired,
  fields: PropType.array.isRequired,
};

export default Form;
