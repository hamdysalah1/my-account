import React from 'react';

import { Responsive } from '../helper';

const Home = () => (
  <>
    <Responsive>
      {(r) => (
        <>
          {r.mobile && <h1> Mobile </h1>}
          {r.tablet && <h1> Tablet </h1>}
          {r.desktop && <h1> Desktop </h1>}
        </>
      )}
    </Responsive>
    <h1> Hello </h1>
  </>
);
export default Home;
