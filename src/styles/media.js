import { css } from "styled-components";

export const breakpoints = {
  tablet: "768px",
  lgTablet: "868px",
  pc: "1200px",
};

export const media = {
  mobile: (...args) => css`
    ${css(...args)};
  `,

  tablet: (...args) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${css(...args)};
    }
  `,

  pc: (...args) => css`
    @media (min-width: ${breakpoints.pc}) {
      ${css(...args)};
    }
  `,
};
