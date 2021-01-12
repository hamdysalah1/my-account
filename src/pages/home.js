import React from 'react';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <>
      <Header />
      <HomeContainer />
      <Footer />
    </>
  );
};
export default Home;
