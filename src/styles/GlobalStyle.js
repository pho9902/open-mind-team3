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
`;

export default GlobalStyle;
