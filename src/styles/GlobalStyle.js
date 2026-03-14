import { createGlobalStyle, keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

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
    background: rgba(61, 58, 58, 1);
    color: ${({ theme }) => theme.colors.gray10} !important;
    border-radius: 30px !important;
    padding: 12px 20px !important;
    box-shadow: ${({ theme }) => theme.shadows.pt3} !important;
  }

 .spinner {
    animation: ${spin} 0.8s linear infinite;
    transform-origin: center; 
    display: inline-block;    
  }
  
`;

export default GlobalStyle;
