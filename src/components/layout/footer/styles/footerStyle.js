import styled from 'styled-components';
import { DEFAULT_COLOR, BLACK_COLOR } from '../../../../constants';

const isHome =
  window.location.pathname === '/en' || window.location.pathname === '/ar';
export const FooterLinks = styled.div`
  font-weight: bold;
  text-align: center;
  a {
    ${isHome
      ? `
          color: ${DEFAULT_COLOR};
        `
      : `color: ${BLACK_COLOR};`};
    text-decoration: none;
    font-size: 18px;
    line-height: 40px;
  }
`;
export const FooterRights = styled.div`
  text-align: center;
  color: #999;
  font-size: 14px;
  line-height: 40px;
`;
