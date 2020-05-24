import React, { useContext } from 'react';
import { PlaylistContext } from '../../contexts/playlistContext';

const AddPlaylist = () => {
  const playlistContext = useContext(PlaylistContext);

  return (
    <button
      type="button"
      onClick={playlistContext.addPlaylist}
    >
      Add Playlist
    </button>
  )
};

export default AddPlaylist;
