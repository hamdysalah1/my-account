/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header, Footer } from '../components';
import { AuthContainer } from '../containers';
import forgotPasswordFields from '../fixtures/forgotPassword';
import { profile } from '../services';
import { useAuth } from '../hooks';
import { PROFILE } from '../constants';

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const params = useParams();
  const history = useHistory();
  if (useAuth.isAuthenticated) {
    history.push(`/${params.lang}/${PROFILE}`);
  }

  const onSubmit = async (body) => {
    useAuth.forgotPassword(profile.FORGOT_PASSWORD({ ...body }), (payload) =>
      setError(payload.msg),
    );
  };

  return (
    <>
      <Header />
      <AuthContainer
        formFields={forgotPasswordFields}
        linkTo={`/${params.lang}/`}
        buttonText="LOGIN_TEXT"
        formTitle="FORGOT_PASSWORD_TEXT"
        onSubmit={(e) => onSubmit(e)}
        serverMessage={error}
      />
      <Footer />
    </>
  );
};
export default ForgotPassword;
