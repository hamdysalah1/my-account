export const hasErrorMgs = (field, errors) => {
  console.log('errors[field]', errors[field]);
  let error = '';

  if (Object.keys(errors).length && errors[field]) {
    error = errors[field].message;
  }

  return error;
};

export const validate = {
  NAME: {
    pattern: {
      value: /^[\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      message: 'INVALID_NAME',
    },
    minLength: {
      value: 3,
      message: 'INVALID_NAME',
    },
  },
  EMAIL: {
    pattern: {
      value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
      message: 'INVALID_EMAIL',
    },
  },
};
