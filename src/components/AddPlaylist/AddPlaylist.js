import React, { useContext } from 'react';
import { PlaylistContext } from '../../contexts/playlistContext';

const AddPlaylist = () => {
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  let isDisabled = false;

  if (playlists.length) {
    isDisabled = !playlists[playlists.length - 1].id;
  }

  return (
    <>
    <button
      type="button"
      onClick={playlistContext.addPlaylist}
      disabled={isDisabled}
      className="test"
    >
      Add Playlist
    </button>
    </>
  )
};

export default AddPlaylist;
