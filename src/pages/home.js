/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';
import loginFields from '../fixtures/loginForm';
import { profile } from '../services';
import { useAuth } from '../hooks';
import { PROFILE } from '../constants';

const Home = () => {
  const [error, setError] = useState('');
  const params = useParams();
  const history = useHistory();
  if (useAuth.isAuthenticated) {
    history.push(`/${params.lang}/${PROFILE}`);
  }

  const onSubmit = async (body) => {
    useAuth.login('LOGIN', profile.GET_TOKEN({ ...body }), (payload) => {
      if (payload.isAuthenticated) {
        history.push(`/${params.lang}/profile`);
      } else {
        setError(payload.error);
      }
    });
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
        onSubmit={(e) => onSubmit(e)}
        serverMessage={error}
      />
      <Footer />
    </>
  );
};
export default Home;
