import React from 'react';
import PropTypes from 'prop-types';
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
}) => (
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

Field.defaultProps = {
  value: '',
  title: '',
  id: '',
  options: '',
  onChange: () => {},
  maxDate: '',
  minDate: '',
};
Field.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rules: PropTypes.any.isRequired,
};

export default Field;
