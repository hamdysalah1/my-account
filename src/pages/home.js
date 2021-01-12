import React from 'react';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';
import loginFields from '../fixtures/loginForm';

const Home = () => {
  console.log('loginFields', typeof loginFields);
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <>
      <Header />
      <HomeContainer
        formFields={loginFields}
        buttonOnClick={() => {
          console.log('Clicked');
        }}
        buttonText="SIGN_UP_TEXT"
        formTitle="LOGIN_TEXT"
        onSubmit={() => {}}
      />
      <Footer />
    </>
  );
};
export default Home;
