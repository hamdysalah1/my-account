export const hasErrorMgs = (field, errors) => {
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
  MOBILE: {
    pattern: {
      value: /^\d{10}$/,
      message: 'INVALID_MOBILE',
    },
  },
  PASSWORD: {
    minLength: {
      value: 8,
      message: 'PASSWORD_MIN_LENGTH_8',
    },
  },
};
