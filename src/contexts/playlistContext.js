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

  // addPlaylistItem = (newPlaylistItem) => {
  //   const { playlists } = this.state;
  //   const currPlaylist = playlists.filter(
  //     (p) => p.id === newPlaylistItem.playlistId
  //   )[0];

  //   const filteredPlaylistItems = currPlaylist.playlistItems.filter(
  //     (item) => item.id !== newPlaylistItem.id
  //   );

  //   currPlaylist.playlistItems = filteredPlaylistItems;
  //   currPlaylist.playlistItems.push(newPlaylistItem);

  //   this.setState({
  //     playlists: [
  //       ...playlists.filter((p) => p.id !== newPlaylistItem.playlistId),
  //       currPlaylist,
  //     ],
  //   });
  // };

  addPlaylistItem = (newPlaylistItem) => {
    const { playlists } = this.state;

    this.setState({
      playlists: playlists.map((playlist) => {
        if (playlist.id === newPlaylistItem.playlistId) {
          playlist.playlistItems = [...playlist.playlistItems, newPlaylistItem];
        }

        return playlist;
      }),
    });
  };

  updatePlaylistItem = (newPlaylistItem) => {
    const { playlists } = this.state;

    const updatedPlaylists = playlists.map((playlist) => {
      if (playlist.id === newPlaylistItem.playlistId) {
        playlist.playlistItems = playlist.playlistItems.map((pi) => {
          if (pi.id === newPlaylistItem.id) {
            pi = newPlaylistItem;
          }
          return pi;
        });
      }
      return playlist;
    });

    this.setState({
      playlists: updatedPlaylists,
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
          updatePlaylistItem: this.updatePlaylistItem,
          removePlaylist: this.removePlaylist,
        }}
      >
        {children}
      </PlaylistContext.Provider>
    );
  }
}
