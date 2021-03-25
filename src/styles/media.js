import { css } from 'styled-components/macro';

export const sizes = {
  xs: 420,
  sm: 600,
  md: 1024,
  lg: 1440,
  xlg: 1920,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (first, ...interpolations) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {});
