import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import Playlist from '../Playlist/Playlist';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

const PlaylistsContainer = () => {
  const playlistContext = useContext(PlaylistContext);
  const renderedPlaylists = playlistContext.state.playlists.map(playlist => {
    return <Playlist key={playlist.id} {...playlist} />
  })

  return (
    <>
      {renderedPlaylists}
      <AddPlaylist />
    </>
  );
};

export default PlaylistsContainer;
