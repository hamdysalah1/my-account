import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7 28.6C15.7 29.8702 16.7297 30.9 18 30.9C19.2702 30.9 20.3 29.8702 20.3 28.6H22.3C22.3 30.9748 20.3748 32.9 18 32.9C15.6251 32.9 13.7 30.9748 13.7 28.6H15.7Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 27.5L26.5213 20.854C26.397 20.5207 26.3333 20.1678 26.3333 19.8121V13.8333C26.3333 9.23096 22.6024 5.5 18 5.5C13.3976 5.5 9.66667 9.23096 9.66667 13.8333V19.8121C9.66667 20.1678 9.603 20.5207 9.47869 20.854L7 27.5H29ZM26.1195 25.5L24.6474 21.5529C24.4397 20.996 24.3333 20.4064 24.3333 19.8121V13.8333C24.3333 10.3355 21.4978 7.5 18 7.5C14.5022 7.5 11.6667 10.3355 11.6667 13.8333V19.8121C11.6667 20.4064 11.5603 20.996 11.3526 21.5529L9.88049 25.5H26.1195Z"
        fill="black"
      />
    </svg>
  );
}

NotificationIcon.defaultProps = {
  width: '23',
  height: '23',
};

NotificationIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
