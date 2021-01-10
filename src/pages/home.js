import React from 'react';
import loginJson from '../fixtures/loginForm.json';
import Form from '../containers/form';

import { Responsive } from '../helper';

const Home = () => {
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <>
      <Form fields={loginJson} onSubmit={onSubmit} />
    </>
  );
};
export default Home;
