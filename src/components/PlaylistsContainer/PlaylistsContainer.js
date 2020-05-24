import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

const PlaylistsContainer = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <div>{userContext.state.user}</div>
      <button onClick={() => userContext.setUser('Chris')}>update user</button>
    </>
  );
};

export default PlaylistsContainer;
