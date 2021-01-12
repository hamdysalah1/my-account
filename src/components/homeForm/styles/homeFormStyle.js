import styled from 'styled-components/macro';
import { xsMax } from 'thegridsys/breakPoints';
import {
  LIGHT_GRAY_COLOR,
  DARK_GRAY_COLOR,
  PRIMARY_COLOR,
} from '../../../constants';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FormWrap = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
`;

export const Footer = styled.div`
  background-color: ${DARK_GRAY_COLOR};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: ${xsMax}px) {
    background-color: transparent;
  }
`;
export const SocialWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: -60px;
  @media (max-width: ${xsMax}px) {
    margin-top: 0;
  }
`;
export const SocialBtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  & > span {
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (max-width: ${xsMax - 170}px) {
    flex-direction: column;
    width: 100%;
    & > span {
      display: block;
      width: 100%;
      margin: 0 0 15px 0;
      width: 100%;
    }
  }
`;

export const SocialBtn = styled.span`
  display: flex;
  align-items: center;
  & > p {
    font-size: 18px;
    font-weight: 700;
    margin-left: 25px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Contact = styled.div`
  margin-top: 40px;

  & > p {
    font-size: 22px;
    font-weight: 800;
  }

  & > a {
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;

    & > svg {
      max-width: 100%;
    }
  }

  @media (max-width: ${xsMax}px) {
    display: flex;
    flex-wrap: wrap;
    & > p {
      flex: 0 0 100%;
      max-width: 100%;
    }

    & > a {
      flex: 0 0 45%;
      max-width: 45%;
      margin-top: 70px;
    }
  }
`;

export const ForgotPassword = styled.a`
  color: ${PRIMARY_COLOR};
`;
export const ActionsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin-bottom: 16px;

  @media (max-width: ${xsMax}px) {
    font-size: 14px;
  }
`;
export const RememberMe = styled.div`
  display: flex;
  align-items: center;

  & > label {
    margin-left: 18px;
    @media (max-width: ${xsMax}px) {
      margin-left: 10px;
    }
  }
`;

export const ChildrenWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
