import styled, { css } from 'styled-components/macro';

const styles = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > p {
    font-size: 18px;
    font-weight: 700;
    margin-left: 25px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Facebook = styled.div`
  ${styles}
`;
export const Google = styled.div`
  ${styles}
`;
