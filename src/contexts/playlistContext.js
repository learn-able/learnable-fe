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

  addPlaylist = (newPlaylist) => {
    this.setState((prevState) => ({
      playlists: [...prevState.playlists, newPlaylist],
    }));
  };

  removePlaylist = () => {
    this.setState({
      playlists: this.state.playlists.filter((p) => p.id),
    });
  };

  setPlaylists = () => {};

  setPlaylistStatus = (id) => {};

  render() {
    const { children } = this.props;
    const { setPlaylists } = this.state;

    return (
      <PlaylistContext.Provider
        value={{
          state: this.state,
          addPlaylist: this.addPlaylist,
          removePlaylist: this.removePlaylist,
        }}
      >
        {children}
      </PlaylistContext.Provider>
    );
  }
}
