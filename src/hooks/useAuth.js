import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.payload };
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
        error: response.message || 'something went wrong',
      };
    }
    dispatch({ type, payload });
    cb(payload);
  };

  useAuth.isAuthenticated = JSON.parse(localStorage.getItem('authUser'));
  return [user, dispatch];
};

export default useAuth;
