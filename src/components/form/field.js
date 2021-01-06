import React from 'react';
import { DateField, SelectField, TextField, TextareaField } from './fields';

const Field = ({
  type,
  value,
  name,
  id,
  onChange,
  options,
  minDate,
  maxDate,
  rules,
  title,
}) => {
  return (
    <>
      {type === 'text' && (
        <TextField
          value={value}
          name={name}
          id={id}
          labelText={title}
          onChange={onChange}
          rules={rules}
        />
      )}
      {type === 'select' && (
        <SelectField
          value={value}
          name={name}
          id={id}
          labelText={title}
          onChange={onChange}
          rules={rules}
          options={options}
        />
      )}
      {type === 'textarea' && (
        <TextareaField
          value={value}
          name={name}
          id={id}
          labelText={title}
          onChange={onChange}
          rules={rules}
        />
      )}
      {type === 'date' && (
        <DateField
          value={value}
          name={name}
          id={id}
          labelText={title}
          onChange={onChange}
          rules={rules}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
    </>
  );
};
export default Field;
