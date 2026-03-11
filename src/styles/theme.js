import { css } from "styled-components";

const colors = {
  // Grayscale
  gray10: "#FFFFFF",
  gray20: "#F9F9F9",
  gray30: "#CFCFCF",
  gray40: "#818181",
  gray50: "#515151",
  gray60: "#000000",

  // Brown
  brown10: "#F5F1EE",
  brown20: "#E4D5C9",
  brown30: "#C7BBB5",
  brown40: "#542F1A",
  brown50: "#341909",

  // etc
  blue: "#1877F2",
  yellow: "#FEE500",
  red: "#B93333",
};

export const theme = {
  colors,

  shadows: {
    pt1: "0 4px 4px 0px rgba(140, 140, 140, 0.25)",
    pt2: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
    pt3: "0 16px 20px 0px rgba(48, 48, 48, 0.62)",
  },

  fonts: {
    actor: "'Actor', sans-serif",
  },

  typography: {
    // 크기: 40px
    h1: css`
      font-weight: 400;
      font-size: 40px;
      line-height: 100%;
      letter-spacing: 0px;
    `,

    // 크기: 32px
    h2: css`
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0px;
    `,

    // 크기: 30px
    h3: css`
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0px;
    `,

    // 크기: 20px
    body1: css`
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0px;
    `,
    body1Actor: css`
      font-family: "Actor", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0px;
    `,

    // 크기: 18px
    body2: css`
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0px;
    `,
    body2Actor: css`
      font-family: "Actor", sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0px;
    `,

    // 크기: 16px
    body3: css`
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0px;
    `,
    body3Actor: css`
      font-family: "Actor", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0px;
    `,

    // 크기: 14px
    caption1Regular: css`
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0px;
    `,
    caption1Medium: css`
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0px;
    `,
    caption1Actor: css`
      font-family: "Actor", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0px;
    `,
  },
};
