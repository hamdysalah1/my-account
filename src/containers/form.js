/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import PropType from 'prop-types';
import { useForm } from 'react-hook-form';
import { Field, FieldWrap, Button, ErrorMsg } from '../components';
import T from '../components/T';
import { hasErrorMgs } from '../utils';
import { GlobalContext } from '../context';

const Form = ({ fields, onSubmit, afterLoop, serverMessage }) => {
  const [{ lang }] = useContext(GlobalContext);
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onChange',
  });
  const formSubmit = (data) => {
    if (!Object.keys(errors).length) {
      onSubmit(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <>
        {serverMessage && <ErrorMsg>{serverMessage}</ErrorMsg>}
        {fields.map((field) => (
          <FieldWrap key={`${field.name}`} lang={lang}>
            <Field
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...field}
              rules={register(
                field.validationRules.match
                  ? {
                      ...field.validationRules,
                      validate: (value) =>
                        value === watch(field.validationRules.match.field) ||
                        field.validationRules.match.message,
                    }
                  : field.validationRules,
              )}
              currentValue={watch(field.name, field.value || '')}
            />
            {errors && (
              <ErrorMsg>
                <T id={hasErrorMgs(field.name, errors)} />
              </ErrorMsg>
            )}
          </FieldWrap>
        ))}
        {afterLoop}
        <Button.Primary type="submit" fullWidth="true">
          submit
        </Button.Primary>
      </>
    </form>
  );
};

Form.defaultProps = {
  afterLoop: '',
  serverMessage: '',
};
Form.propTypes = {
  onSubmit: PropType.func.isRequired,
  fields: PropType.array.isRequired,
  afterLoop: PropType.any,
  serverMessage: PropType.string,
};

export default Form;
