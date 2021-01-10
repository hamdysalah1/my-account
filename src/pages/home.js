import React from 'react';
import { Card } from '../components';
import { useFetchData } from '../hooks';

const Home = () => {
  const user = useFetchData({
    url: 'https://jsonplaceholder.typicode.com/posts',
  });

  if (user.loading) {
    return <div> loading </div>;
  }
  return 'Hello';
};
export default Home;
