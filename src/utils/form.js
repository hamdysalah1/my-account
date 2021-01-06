export const hasErrorMgs = (field, errors) => {
  console.log('errors[field]', errors[field]);
  if (Object.keys(errors).length && errors[field]) {
    return errors[field].message;
  }
};
