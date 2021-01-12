import React from 'react';
import PropTypes from 'prop-types';

export default function FacebookIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.285 23H1.26942C0.568135 23 0 22.4315 0 21.7305V1.26941C0 0.56822 0.568224 0 1.26942 0H21.7307C22.4317 0 23 0.56822 23 1.26941V21.7305C23 22.4316 22.4316 23 21.7307 23H15.8697V14.0931H18.8593L19.3069 10.622H15.8697V8.40585C15.8697 7.40087 16.1487 6.716 17.5899 6.716L19.428 6.7152V3.61056C19.1101 3.56826 18.019 3.47375 16.7495 3.47375C14.0994 3.47375 12.285 5.0914 12.285 8.06208V10.622H9.28775V14.0931H12.285V23Z"
        fill="#4168B2"
      />
    </svg>
  );
}

FacebookIcon.defaultProps = {
  width: '23',
  height: '23',
};

FacebookIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
