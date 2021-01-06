import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  z-index: 1000,
  background: "#fff",
  display: "flex",
  justify-content: "center",
  align-items: "center",
`;
const HardLoading = () => {
  return (
    <Style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#e84c9b"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(294.044 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </Style>
  );
};

export default HardLoading;
