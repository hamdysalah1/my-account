import { makeRequest } from '../utils';

export const profile = {
  GET_TOKEN: async (body) => {
    try {
      const response = await makeRequest('v1/profile/login', 'POST', body);
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
