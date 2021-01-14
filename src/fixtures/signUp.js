import { validate } from '../utils';

const signUpFields = [
  {
    name: 'name',
    type: 'text',
    title: 'FULL_NAME',
    id: 'name',
    validationRules: {
      required: 'REQUIRED',
      ...validate.NAME,
    },
  },
  {
    name: 'mobile',
    type: 'text',
    title: 'MOBILE',
    id: 'mobile',
    validationRules: {
      required: 'REQUIRED',
      ...validate.MOBILE,
    },
  },
  {
    name: 'email',
    type: 'text',
    title: 'EMAIL',
    id: 'email',
    validationRules: {
      required: 'REQUIRED',
      ...validate.EMAIL,
    },
  },
  {
    name: 'password',
    value: '',
    title: 'PASSWORD',
    type: 'password',
    id: 'password',
    validationRules: {
      required: 'REQUIRED',
      ...validate.PASSWORD,
    },
  },
  {
    name: 'passwordConfirm',
    value: '',
    title: 'PASSWORD_CONFIRM',
    type: 'password',
    id: 'passwordConfirm',
    validationRules: {
      required: 'REQUIRED',
      match: {
        field: 'password',
        message: 'PASSWORD_NOT_MATCH',
      },
    },
  },
];

export default signUpFields;
