import React, { createContext } from 'react';

export const AppSettingsContext = createContext();

export default class AppSettingsProvider extends React.Component {
  state = {
    view: false,
  };

  render() {
    const { children } = this.props;

    return (
      <AppSettingsContext.Provider
        value={{ state: this.state }}
      >
        {children}
      </AppSettingsContext.Provider>
    );
  }
}
