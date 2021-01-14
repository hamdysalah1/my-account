/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header, Footer } from '../components';
import { AuthContainer } from '../containers';
import signUpFields from '../fixtures/signUp';
import { profile } from '../services';
import { useAuth } from '../hooks';
import { PROFILE } from '../constants';

const SignUp = () => {
  const [error, setError] = useState('');
  const params = useParams();
  const history = useHistory();
  if (useAuth.isAuthenticated) {
    history.push(`/${params.lang}/${PROFILE}`);
  }

  const onSubmit = async (body) => {
    useAuth.signUp(
      'SIGN_UP',
      profile.CREATE_USER({ ...body }),
      (payload) => payload.error && setError(payload.error),
    );
  };

  return (
    <>
      <Header />
      <AuthContainer
        formFields={signUpFields}
        buttonOnClick={() => {
          history.push(`/`);
        }}
        buttonText="LOGIN_TEXT"
        formTitle="SIGN_UP_TEXT"
        onSubmit={(e) => onSubmit(e)}
        serverMessage={error}
      />
      <Footer />
    </>
  );
};
export default SignUp;
