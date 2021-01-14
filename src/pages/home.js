/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header, Footer } from '../components';
import { HomeContainer } from '../containers';
import loginFields from '../fixtures/loginForm';
import { profile } from '../services';
import { useAuth } from '../hooks';

const Home = () => {
  const [error, setError] = useState('');
  const params = useParams();
  const history = useHistory();
  if (useAuth.isAuthenticated) {
    history.push(`/${params.lang}/profile`);
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

  const facebookCallback = async (fb) => {
    if (fb.accessToken) {
      const body = { medium: 'facebook', accessToken: fb.accessToken };

      useAuth.login(
        'LOGIN',
        profile.SOCIAL_LOGIN({ ...body }),
        (p) => p.isAuthenticated && history.push(`/${params.lang}/profile`),
      );
    }
  };

  const googleCallback = async (google) => {
    // if (google.accessToken) {
    //   const body = {
    //     medium: 'google',
    //     accessToken: google.accessToken,
    //   };
    //   const response = await profile.SOCIAL_LOGIN(body);
    //   console.log('response', response);
    //   if (response.success) {
    //     setUser({ ...google.profileObj });
    //     history.push(`/${params.lang}/profile`);
    //   } else {
    //     setError(response.message);
    //   }
    // }
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
        googleCallback={(e) => googleCallback(e)}
      />
      <Footer />
    </>
  );
};
export default Home;
