import React from 'react';
// eslint-disable-next-line no-unused-vars
import loginJson from '../fixtures/loginForm.json';
// eslint-disable-next-line no-unused-vars
import Form from '../containers/form';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';
// eslint-disable-next-line no-unused-vars
import { Responsive } from '../helper';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <>
      {/* <Form fields={loginJson} onSubmit={onSubmit} /> */}
      <Header />
      <Footer />
    </>
  );
};
export default Home;
