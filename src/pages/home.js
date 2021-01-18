/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header, Footer, HomeForm } from '../components';
import { AuthContainer } from '../containers';
import loginFields from '../fixtures/loginForm';
import { profile } from '../services';
import { useAuth } from '../hooks';
import { PROFILE, SIGN_UP, FORGOT_PASSWORD } from '../constants';

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
      <AuthContainer
        formFields={loginFields}
        linkTo={`/${params.lang}/${SIGN_UP}`}
        buttonText="SIGN_UP_TEXT"
        formTitle="LOGIN_TEXT"
        onSubmit={(e) => onSubmit(e)}
        serverMessage={error}
        submitText="LOGIN_TEXT"
        afterLoop={
          <HomeForm.Actions linkTo={`/${params.lang}/${FORGOT_PASSWORD}`} />
        }
      />
      <Footer />
    </>
  );
};
export default Home;
