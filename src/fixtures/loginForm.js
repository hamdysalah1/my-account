import { validate } from '../utils';

const loginFields = [
  {
    name: 'first_name',
    value: '',
    type: 'text',
    title: 'Name',
    id: 'first_name',
    validationRules: {
      required: 'REQUIRED',
      ...validate.NAME,
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
