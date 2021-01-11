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
`;

export const 