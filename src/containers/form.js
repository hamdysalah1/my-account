/* eslint-disable react/forbid-prop-types */
import React, { useContext, memo, useState } from 'react';
import PropType from 'prop-types';
import { useForm } from 'react-hook-form';
import { Field, FieldWrap, Button, ErrorMsg, T } from '../components';
import { hasErrorMgs } from '../utils';
import { GlobalContext } from '../context';

const Form = memo(
  ({ fields, onSubmit, afterLoop, serverMessage, submitText }) => {
    const [values, setValues] = useState({});
    const [{ lang }] = useContext(GlobalContext);
    const { register, handleSubmit, errors, watch, getValues } = useForm({
      mode: 'onChange',
    });
    const formSubmit = (data, e) => {
      e.preventDefault();
      if (!Object.keys(errors).length) {
        onSubmit(data);
      }
    };
    const fieldOnChange = ({ target }, value) => {
      values[target.name] = value;
      setValues({ ...values });
    };
    return (
      <form onSubmit={handleSubmit(formSubmit)}>
        <>
          {serverMessage && <ErrorMsg>{serverMessage}</ErrorMsg>}
          {fields.map((field) => (
            <FieldWrap key={`${field.name}`} lang={lang}>
              <Field
                name={field.name}
                id={field.id || field.name}
                title={field.title}
                type={field.type}
                options={field.option}
                minDate={field.minDate}
                maxDate={field.maxDate}
                onChange={(e) => fieldOnChange(e, getValues(field.name))}
                value={field.value || values[field.name]}
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
            <T id={submitText} />
          </Button.Primary>
        </>
      </form>
    );
  },
);

Form.defaultProps = {
  afterLoop: '',
  serverMessage: '',
};
Form.propTypes = {
  onSubmit: PropType.func.isRequired,
  fields: PropType.array.isRequired,
  afterLoop: PropType.any,
  serverMessage: PropType.string,
  submitText: PropType.string.isRequired,
};

export default Form;
