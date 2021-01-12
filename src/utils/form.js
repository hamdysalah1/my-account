export const hasErrorMgs = (field, errors) => {
  console.log('errors[field]', errors[field]);
  let error;

  if (Object.keys(errors).length && errors[field]) {
    error = errors[field].message;
  }

  return error;
};

export const validate = {
  NAME: {
    pattern: {
      value: /^[\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      message: 'Invalid Name',
    },
    minLength: {
      value: 1,
      message: 'Length must be greater than 1',
    },
  },
  EMAIL: {
    pattern: {
      value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
      message: 'Invalid Email',
    },
  },
};
