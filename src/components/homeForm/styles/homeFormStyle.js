import styled from 'styled-components/macro';
import { LIGHT_GRAY_COLOR, DARK_GRAY_COLOR } from '../../../constants';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
`;
export const SocialWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: -60px;
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
  }
`;
