import React from 'react';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';
import loginFields from '../fixtures/loginForm.json';

const Home = () => {
<<<<<<< HEAD
  // eslint-disable-next-line no-unused-vars
=======
  console.log('loginFields', typeof loginFields);
>>>>>>> 3763f4c43e4307b51d1fcccf1a5b2745a8259e6f
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <>
      <Header />
      <HomeContainer
        formFields={loginFields}
        buttonOnClick={() => {}}
        buttonText="SIGN_UP_TEXT"
        formTitle="LOGIN_TEXT"
        onSubmit={() => {}}
      />
      <Footer />
    </>
  );
};
export default Home;
