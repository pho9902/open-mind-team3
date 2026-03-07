import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    background-color: ${({ theme }) => theme.colors.gray20}
  }

  input, textarea, button, select {
    font-family: inherit; 
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button { 
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
  }

  .toast {
    ${({ theme }) => theme.typography.caption1Regular}; 
    background-color: ${({ theme }) => theme.colors.gray60};
    color: ${({ theme }) => theme.colors.gray10} !important;
    border-radius: 8px !important;
    padding: 12px 20px !important;
    box-shadow: ${({ theme }) => theme.shadows.pt3} !important;
  }
`;

export default GlobalStyle;
