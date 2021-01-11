import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser')),
  );

  useEffect(() => {
    const listener = () => {
      // get token from local storage
      // validate token
      // return user is it valid

      const authUser = false;
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    };

    return () => listener();
  }, []);

  return { user };
};

export default useAuth;
