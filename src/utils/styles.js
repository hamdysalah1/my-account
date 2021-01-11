import styled, { css } from 'styled-components';

export const Rounded = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 800;
`;

export const Badge = styled.span`
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
`;
