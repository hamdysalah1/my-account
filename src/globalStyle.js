import { createGlobalStyle } from 'styled-components';
import { xsMax } from 'thegridsys/breakPoints';
import normalize from 'normalize.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  body {

    font-weight: 300;
    font-size: 22px;
    ${({ lang }) =>
      lang === 'ar'
        ? `direction: rtl;font-family: 'Almarai', sans-serif;`
        : `font-family: 'Inter', sans-serif;`}
    ${({ user }) =>
      !user
        ? `
          background-image: url(https://d16053qvinakro.cloudfront.net/my-account/home_bg-min.jpg);
          background-repeat: no-repeat;
          position: relative;
          background-size: cover;
          background-attachment: fixed;
        `
        : 'background: #E5E5E5;'};
  }
  ${({ user }) =>
    !user &&
    `
      body::after {
        content: '';
        background-color: rgba(70, 49, 29, 1);
        opacity: .6;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1
      }
      @media (max-width: ${xsMax}px){
        body{
          background: #F8F8F8;
        }
        body::after{
          display: none;
        }
      }
    `}
`;

export default GlobalStyle;
