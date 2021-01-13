import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser')),
  );

  useEffect(() => {
    const listener = () => {
      localStorage.setItem('authUser', JSON.stringify(user));
    };

    return listener();
  }, [user, setUser]);

  return [user, setUser];
};

export default useAuth;
