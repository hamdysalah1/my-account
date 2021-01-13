/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';
import loginFields from '../fixtures/loginForm';
import { profile } from '../services';
import { useAuth } from '../hooks';

const Home = () => {
  const [user, setUser] = useAuth();
  const [error, setError] = useState('');

  const params = useParams();
  const history = useHistory();
  if (user) {
    history.push(`/${params.lang}/profile`);
  }
  const location = useLocation();

  console.log('useLocation', location);
  const onSubmit = async (body) => {
    const response = await profile.GET_TOKEN(body);
    if (response.error_code) {
      setError(response.message);
    }
  };

  const facebookCallback = async (fb) => {
    const body = { medium: 'facebook', accessToken: fb.accessToken };
    const response = await profile.SOCIAL_LOGIN(body);

    if (response.success) {
      setUser({ ...fb });
      history.push(`/${params.lang}/profile`);
    } else {
      setError(response.message);
    }
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
        facebookCallback={(e) => facebookCallback(e)}
      />
      <Footer />
    </>
  );
};
export default Home;
