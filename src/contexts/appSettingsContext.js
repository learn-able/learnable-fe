import React, { createContext } from 'react';

export const AppSettingsContext = createContext();

export default class AppSettingsProvider extends React.Component {
  state = {
    view: true,
  };

  switchView = () =>  {
    this.setState({view: !this.state.view})
  }

  render() {
    const { children } = this.props;

    return (
      <AppSettingsContext.Provider
        value={{ state: this.state, switchView: this.switchView }}
      >
        {children}
      </AppSettingsContext.Provider>
    );
  }
}
