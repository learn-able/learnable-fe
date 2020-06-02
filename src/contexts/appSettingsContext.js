import React, { createContext } from 'react';

export const AppSettingsContext = createContext();

export default class AppSettingsProvider extends React.Component {
  state = {
    view: true,
    archiveView: false,
  };

  switchView = () =>  {
    this.setState({view: !this.state.view})
  }

  switchArchiveView = () =>  {
    this.setState({archiveView: !this.state.archiveView})
  }

  render() {
    const { children } = this.props;

    return (
      <AppSettingsContext.Provider
        value={
          {
            state: this.state,
            switchView: this.switchView,
            switchArchiveView: this.switchArchiveView,
          }
        }
      >
        {children}
      </AppSettingsContext.Provider>
    );
  }
}
