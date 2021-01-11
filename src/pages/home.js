import React from 'react';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';

const Home = () => {
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
