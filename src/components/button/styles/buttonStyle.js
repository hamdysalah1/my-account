import styled, { css } from 'styled-components/macro';
import {
  DARK_GRAY_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../../constants';

const Button = css`
  padding: 12px 40px;
  border: none;
  border-radius: 300px;
  cursor: pointer;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
`;

export const Default = styled.button`
  ${Button}
  background: ${DARK_GRAY_COLOR};
  color: ${PRIMARY_COLOR};
`;
export const Secondary = styled.button`
  ${Button}
  background: ${SECONDARY_COLOR};
  color: #fff;
`;
export const Primary = styled.button`
  ${Button}
  color: #fff;
  background-color: ${PRIMARY_COLOR};
`;
