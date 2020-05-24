import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import Playlist from '../Playlist/Playlist';

const PlaylistsContainer = () => {
  const userContext = useContext(UserContext);
  const playlistContext = useContext(PlaylistContext);

  return (
    <>
      <div>{userContext.state.user}</div>
      <button onClick={() => userContext.setUser('Chris')}>update user</button>
      <Playlist text={"I am a prop."}/>
    </>
  );
};

export default PlaylistsContainer;
