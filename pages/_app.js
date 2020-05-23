import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
