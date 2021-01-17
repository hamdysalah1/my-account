import styled from 'styled-components';
import { xsMax } from 'thegridsys/breakPoints';
import { DEFAULT_COLOR, BLACK_COLOR } from '../../../../constants';

export const FooterLinks = styled.div`
  font-weight: bold;
  text-align: center;
  a {
    ${({ user }) =>
      !user
        ? `
          color: ${DEFAULT_COLOR};
        `
        : `color: ${BLACK_COLOR};`};
    text-decoration: none;
    font-size: 18px;
    line-height: 40px;
  }
  @media (max-width: ${xsMax}px) {
    a {
      color: ${BLACK_COLOR};
    }

    &:nth-child(2),
    &:nth-child(3) {
      width: 50%;
      display: inline-block;
    }
  }
`;
export const FooterLinksWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${xsMax}px) {
    margin-top: 0;
    display: block;
  }
`;
export const FooterRights = styled.div`
  text-align: center;
  color: #999;
  font-size: 14px;
  line-height: 40px;
`;
