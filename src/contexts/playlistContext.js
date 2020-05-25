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

  addPlaylist = () => {
    const playlist =   {
        id: null,
        title: "",
        user_id: 1,
        status: 1,
        playlistItems: [],
      };

    this.setState({playlists: [...this.state.playlists, playlist]});
  };

  setPlaylists = () => {};

  setPlaylistStatus = (id) => {};

  render() {
    const { children } = this.props;
    const { setPlaylists } = this.state;

    return (
      <PlaylistContext.Provider value={{
          state: this.state,
          addPlaylist: this.addPlaylist
      }}>
        {children}
      </PlaylistContext.Provider>
    );
  }
}
