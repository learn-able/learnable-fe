import React, { createContext } from 'react';
import { mockPlaylistData } from '../../mockData/mockData';

export const PlaylistContext = createContext();

export default class PlaylistProvider extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.setState({ playlists: mockPlaylistData });
  }

  addPlaylist = () => {};

  setPlaylists = () => {};

  setPlaylistStatus = (id) => {};

  render() {
    const { children } = this.props;
    const { setPlaylists } = this.state;

    return (
      <PlaylistContext.Provider value={{ state: this.state, setPlaylists }}>
        {children}
      </PlaylistContext.Provider>
    );
  }
}
