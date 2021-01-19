import { css } from 'styled-components';
import { getOppositeValue } from '../utils/getOppositeValue';

export const rtl = (rule, property) => css`
  ${({ lang }) =>
    lang === 'ar'
      ? `${getOppositeValue(rule)}: ${property};`
      : `${rule} : ${property};`}
`;

export const textAlign = (property) => css`
  ${({ lang }) =>
    `text-align: ${lang === 'ar' ? getOppositeValue(property) : property};`}
`;
