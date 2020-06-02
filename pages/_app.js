import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import UserProvider from '../src/contexts/userContext';
import AppSettingsProvider from '../src/contexts/appSettingsContext';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserProvider>
        <AppSettingsProvider>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <GlobalStyles />
              <Component {...pageProps} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </AppSettingsProvider>
      </UserProvider>
    );
  }
}
