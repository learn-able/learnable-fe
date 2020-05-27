import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }

  body,
  html {
    height: 100%;
  }
`;

export default GlobalStyles;
