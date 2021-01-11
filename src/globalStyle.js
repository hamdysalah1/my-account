import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import normalize from 'normalize.css';

const isHome = window.location.pathname === '/';
const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    outline: none;
  }
  body {
    font-family: 'Inter', sans-serif;
    ${
      isHome
        ? `
          background-image: url(https://d16053qvinakro.cloudfront.net/my-account/home_bg-min.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        `
        : 'background: #E5E5E5;'
    };
  }
  ${
    isHome &&
    `
      body::after {
        content: '';
        background-color: rgba(70, 49, 29, 1);
        opacity: .3;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1
      }
    `
  }
`;

export default GlobalStyle;
