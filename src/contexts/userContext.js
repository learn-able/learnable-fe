import React, { createContext } from 'react';

export const UserContext = createContext();

export default class UserProvider extends React.Component {
  state = {
    user: 'Ryan',
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{ state: this.state, setUser: this.setUser }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}
