import React, { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { mockPlaylistData } from '../../mockData/mockData';

export const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [state, setState] = useState({ playlists: [] });
  const { isLoading, error, sendRequest, clearError } = useFetch();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const responseData = await sendRequest(
          `http://learnablebe.herokuapp.com/api/v0/user/1/playlists`
        );
        setState({ playlists: responseData.data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendRequest]);

  const addPlaylist = (newPlaylist) => {
    setState((prevState) => ({
      playlists: [...prevState.playlists, newPlaylist],
    }));
  };

  const addPlaylistItem = (newPlaylistItem) => {
    const { playlists } = state;

    setState({
      playlists: playlists.map((playlist) => {
        if (playlist.id === newPlaylistItem.playlistId) {
          playlist.playlistItems = [...playlist.playlistItems, newPlaylistItem];
        }

        return playlist;
      }),
    });
  };

  const updatePlaylistItem = (newPlaylistItem) => {
    const { playlists } = state;

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

    setState({
      playlists: updatedPlaylists,
    });
  };

  const removePlaylist = () => {
    setState({
      playlists: state.playlists.filter((p) => p.id),
    });
  };

  return (
    <PlaylistContext.Provider
      value={{
        state,
        addPlaylist,
        addPlaylistItem,
        updatePlaylistItem,
        removePlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;

// export default class PlaylistProvider extends React.Component {
//   state = {
//     playlists: [],
//   };

//   componentDidMount() {
//     this.setState({ playlists: mockPlaylistData });
//   }

//   addPlaylist = (newPlaylist) => {
//     this.setState((prevState) => ({
//       playlists: [...prevState.playlists, newPlaylist],
//     }));
//   };

//   addPlaylistItem = (newPlaylistItem) => {
//     const { playlists } = this.state;

//     this.setState({
//       playlists: playlists.map((playlist) => {
//         if (playlist.id === newPlaylistItem.playlistId) {
//           playlist.playlistItems = [...playlist.playlistItems, newPlaylistItem];
//         }

//         return playlist;
//       }),
//     });
//   };

//   updatePlaylistItem = (newPlaylistItem) => {
//     const { playlists } = this.state;

//     const updatedPlaylists = playlists.map((playlist) => {
//       if (playlist.id === newPlaylistItem.playlistId) {
//         playlist.playlistItems = playlist.playlistItems.map((pi) => {
//           if (pi.id === newPlaylistItem.id) {
//             pi = newPlaylistItem;
//           }
//           return pi;
//         });
//       }
//       return playlist;
//     });

//     this.setState({
//       playlists: updatedPlaylists,
//     });
//   };

//   removePlaylist = () => {
//     this.setState({
//       playlists: this.state.playlists.filter((p) => p.id),
//     });
//   };

//   render() {
//     const { children } = this.props;

//     return (
//       <PlaylistContext.Provider
//         value={{
//           state: this.state,
//           addPlaylist: this.addPlaylist,
//           addPlaylistItem: this.addPlaylistItem,
//           updatePlaylistItem: this.updatePlaylistItem,
//           removePlaylist: this.removePlaylist,
//         }}
//       >
//         {children}
//       </PlaylistContext.Provider>
//     );
//   }
// }
