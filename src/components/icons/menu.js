import React from 'react';
import PropTypes from 'prop-types';

export default function MenuIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="29"
        y1="11"
        x2="7"
        y2="11"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="29"
        y1="27"
        x2="6"
        y2="27"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="29"
        y1="19"
        x2="16"
        y2="19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

MenuIcon.defaultProps = {
  width: '23',
  height: '23',
};

MenuIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
