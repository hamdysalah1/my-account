import React from 'react';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';
import loginFields from '../fixtures/loginForm';
import { useFetchData } from '../hooks';
import { profile } from '../services';

const Home = () => {
  // const [data, setData] = useFetchData(profile.GET_TOKEN());

  const onSubmit = async (body) => {
    console.log('onSubmit body', body);
    const req = profile.GET_TOKEN(body);
    console.log('req', req);
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
        onSubmit={() => onSubmit()}
      />
      <Footer />
    </>
  );
};
export default Home;
