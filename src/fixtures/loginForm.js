import { validate } from '../utils';

const loginFields = [
  {
    name: 'username',
    value: '',
    type: 'text',
    title: 'Username',
    id: 'username',
    validationRules: {
      required: 'REQUIRED',
      ...validate.EMAIL,
    },
  },
  {
    name: 'password',
    value: '',
    title: 'password',
    type: 'password',
    id: 'password',
    validationRules: {
      required: 'REQUIRED',
    },
  },
];

export default loginFields;
