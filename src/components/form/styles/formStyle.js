import styled, { css } from 'styled-components/macro';

export const sharedFormStyles = css`
  border: none;
  padding: 25px 15px 15px;
  background: #ffffff;
  border-radius: 8px;
  font-size: 16px;
  width: ${({ width }) => (width ? `${width};` : '100%;')};
  transition: all 0.25s;
  ${({ type }) =>
    type !== 'checkbox' &&
    `&:focus,
  &:valid {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.22);

    & + label {
      top: 5px;
    }
  }`}
`;

export const FieldWrap = styled.div`
  margin-bottom: 30px;
  position: relative;
  & > label {
    position: absolute;
    left: 15px;
    top: 20px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 16px;
    transition: all 0.25s;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 15px;
`;
