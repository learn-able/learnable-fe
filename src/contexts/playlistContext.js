import React, { createContext } from 'react';

export const PlayListContext = createContext();

export default class PlaylistProvider extends React.Component {
  state = {
    playlists: [],
  };

  addPlaylist = () => {};

  setPlaylists = () => {};

  setPlaylistStatus = (id) => {};

  render() {
    const { children } = this.props;
    const { setPlaylists } = this.state;

    return (
      <PlayListContext.Provider value={{ state: this.state, setPlaylists }}>
        {children}
      </PlayListContext.Provider>
    );
  }
}
