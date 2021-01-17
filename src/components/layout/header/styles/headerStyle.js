import styled from 'styled-components/macro';
import {
  SECONDARY_COLOR,
  DEFAULT_COLOR,
  BLACK_COLOR,
} from '../../../../constants';

const isHome =
  window.location.pathname === '/en' || window.location.pathname === '/ar';
export const HeadWrapper = styled.div`
  margin: 20px 0;
`;
export const UserName = styled.div`
  display: inline-block;
  border-radius: 100%;
  width: 36px;
  height: 36px;
  color: ${DEFAULT_COLOR};
  background: ${SECONDARY_COLOR};
  text-align: center;
  line-height: 36px;
`;
export const Language = styled.div`
  ${isHome
    ? `
      color: ${DEFAULT_COLOR};
      display: block;
      text-align: right;
    `
    : `color: ${BLACK_COLOR};`};
`;
export const Menu = styled.div`
  ${isHome
    ? `
    display: none;
  `
    : `display: inline-block;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;`};
`;
export const Notification = styled.div`
  display: inline-block;
`;
export const YallaHomeLogoWrapper = styled.div`
  ${isHome
    ? `
display: inline-block;
`
    : ` display: none`};
`;

export const YallaLogoWrapper = styled.div`
  ${isHome
    ? `
display: none;
`
    : ` display: inline-block`};
`;
