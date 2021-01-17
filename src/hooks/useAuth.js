import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.payload };
    case 'SIGN_UP':
      return console.log('SIGN_UP REDUCER');
    default:
      throw new Error();
  }
}
const initialState = {
  isAuthenticated: false,
  error: '',
};
const useAuth = () => {
  const [user, dispatch] = useReducer(reducer, initialState);

  useAuth.login = async (type, res, cb) => {
    const response = await res;
    let payload;

    if (response.access_token) {
      payload = { ...response, isAuthenticated: true };
      localStorage.setItem('authUser', JSON.stringify({ ...response }));
    } else {
      payload = {
        isAuthenticated: false,
        error: response.message || 'SOMETHING_WENT_WRONG',
      };
    }
    dispatch({ type, payload });
    cb(payload);
  };

  useAuth.signUp = async (type, res, cb) => {
    const response = await res;
    let payload;

    if (!response.id) {
      payload = {
        error: response.message || 'SOMETHING_WENT_WRONG',
      };
    }

    dispatch({ type, payload });
    cb(payload);
  };

  useAuth.forgotPassword = async (res, cb) => {
    const response = await res;
    const payload = {
      msg: response.msg || 'SOMETHING_WENT_WRONG',
    };

    cb(payload);
  };

  useAuth.isAuthenticated = JSON.parse(localStorage.getItem('authUser'));

  return [user, dispatch];
};

export default useAuth;
