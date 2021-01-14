import { validate } from '../utils';

const forgotPasswordFields = [
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
];

export default forgotPasswordFields;
