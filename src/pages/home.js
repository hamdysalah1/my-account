import React from 'react';
import { Card } from '../components';
import { useFetchData } from '../hooks';
import Test from '../components/test/test';

const Home = () => {
  const user = useFetchData({
    url: 'https://jsonplaceholder.typicode.com/posts',
  });

  if (user.loading) {
    return <div> loading </div>;
  }
  return <Test>sssss</Test>;
};
export default Home;
