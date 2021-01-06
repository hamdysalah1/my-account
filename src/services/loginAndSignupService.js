import { makeRequest } from '../utils';

export const loginAndSignupService = {
  GET_TOKEN: async () => {
    try {
      const response = await makeRequest('');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  ADD_USER: async (body) => {
    try {
      const response = await makeRequest('', 'POST', body);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const getInsurance = 'GET_INSURANCE_FN_HERE';
