import React from 'react';
import PropTypes from 'prop-types';
import parseISO from 'date-fns/parseISO';
import styled from 'styled-components';
import { sharedFormStyles } from '../styles/formStyle';
import T from '../../T';

const Input = styled.input`
  ${sharedFormStyles}
`;

const DateField = ({
  value,
  name,
  id,
  labelText,
  onChange,
  minDate,
  maxDate,
  rules,
}) => (
  <>
    <label htmlFor={id}>
      {' '}
      <T id={labelText} />{' '}
    </label>
    <Input
      type="date"
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      minDate={minDate && parseISO(minDate)}
      maxDate={maxDate && parseISO(maxDate)}
      ref={rules}
    />
  </>
);

DateField.defaultProps = {
  value: '',
  labelText: '',
  id: '',
  onChange: () => {},
};

DateField.propTypes = {
  value: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  maxDate: PropTypes.string.isRequired,
  minDate: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.any.isRequired,
};
export default DateField;
