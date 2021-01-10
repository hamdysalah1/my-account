import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { smMax, xsMax, mdMin, smMin } from 'thegridsys/breakPoints';

const Responsive = ({ children }) => (
  <Media
    queries={{
      mobile: `(max-width: ${xsMax}px)`,
      tablet: `(min-width: ${smMin}px) and (max-width: ${smMax}px)`,
      desktop: `(min-width: ${mdMin}px)`,
    }}
  >
    {children}
  </Media>
);

Responsive.propTypes = {
  children: PropTypes.func.isRequired,
};
export default Responsive;
