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
        title: 'Learn Javascript',
        user_id: 1,
        status: 1,
        playlistItems: [
          {
            id: 1,
            title: 'JavaScript Crash Course',
            url: '#',
            isComplete: false,
            playlist_id: 3,
          },
        ],
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
