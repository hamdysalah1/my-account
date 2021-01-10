/* eslint-disable import/prefer-default-export */
export const hasErrorMgs = (field, errors) => {
  console.log('errors[field]', errors[field]);
  let error;

  if (Object.keys(errors).length && errors[field]) {
    error = errors[field].message;
  }

  return error;
};
