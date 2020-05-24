import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import UserProvider from '../src/contexts/userContext';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    );
  }
}
