/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropType from 'prop-types';
import { useForm } from 'react-hook-form';
import { Field, FieldWrap, Button } from '../components';
import { hasErrorMgs } from '../utils';

const Form = ({ fields, onSubmit, afterLoop }) => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });

  const formSubmit = (data) => {
    if (!Object.keys(errors).length) {
      onSubmit(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      {fields.map((field) => (
        <FieldWrap key={`${field.name}`}>
          <Field
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            rules={register(...field.validationRules)}
          />
          {errors && hasErrorMgs(field.name, errors)}
        </FieldWrap>
      ))}
      {afterLoop}
      <Button.Primary type="submit" fullWidth="true">
        submit
      </Button.Primary>
    </form>
  );
};

Form.defaultProps = {
  afterLoop: '',
};
Form.propTypes = {
  onSubmit: PropType.func.isRequired,
  fields: PropType.array.isRequired,
  afterLoop: PropType.any,
};

export default Form;
