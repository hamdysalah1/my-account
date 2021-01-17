import { validate } from '../utils';

const loginFields = [
  {
    name: 'username',
    type: 'text',
    title: 'USERNAME',
    id: 'username',
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
    },
  },
];

export default loginFields;
