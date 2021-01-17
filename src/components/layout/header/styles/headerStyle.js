import styled from 'styled-components/macro';
import {
  SECONDARY_COLOR,
  DEFAULT_COLOR,
  BLACK_COLOR,
} from '../../../../constants';

export const HeadWrapper = styled.div`
  margin: 20px 0 40px 0;
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
  ${({ user }) =>
    !user
      ? `
      color: ${DEFAULT_COLOR};
      display: block;
      text-align: right;
      font-size: 18px;
    `
      : `color: ${BLACK_COLOR};`};
`;
export const Menu = styled.div`
  ${({ user }) =>
    !user
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
  ${({ user }) =>
    !user
      ? `
        display: inline-block;
      `
      : ` display: none`};
`;

export const YallaLogoWrapper = styled.div`
  ${({ user }) =>
    !user
      ? `
display: none;
`
      : ` display: inline-block`};
`;
