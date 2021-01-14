import React from 'react';
import PropTypes from 'prop-types';
import {
  DateField,
  SelectField,
  TextField,
  TextareaField,
  PasswordField,
} from './fields';

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
  currentValue,
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
        currentValue={currentValue}
      />
    )}
    {type === 'password' && (
      <PasswordField
        value={value}
        name={name}
        id={id}
        labelText={title}
        onChange={onChange}
        rules={rules}
        currentValue={currentValue}
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
        currentValue={currentValue}
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
        currentValue={currentValue}
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
        currentValue={currentValue}
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
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  rules: PropTypes.any.isRequired,
};

export default Field;
