import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  html {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
