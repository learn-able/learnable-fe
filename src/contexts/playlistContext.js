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

  addPlaylistItem = (newPlaylistItem) => {
    const { playlists } = this.state;
    const currPlaylist = playlists.filter(
      (p) => p.id === newPlaylistItem.playlistId
    )[0];

    currPlaylist.playlistItems.push(newPlaylistItem);

    this.setState({
      playlists: [
        ...playlists.filter((p) => p.id !== newPlaylistItem.playlistId),
        currPlaylist,
      ],
    });
  };

  removePlaylist = () => {
    this.setState({
      playlists: this.state.playlists.filter((p) => p.id),
    });
  };

  render() {
    const { children } = this.props;

    return (
      <PlaylistContext.Provider
        value={{
          state: this.state,
          addPlaylist: this.addPlaylist,
          addPlaylistItem: this.addPlaylistItem,
          removePlaylist: this.removePlaylist,
        }}
      >
        {children}
      </PlaylistContext.Provider>
    );
  }
}
