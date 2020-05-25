import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';
import Playlist from '../Playlist/Playlist';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

const Main = styled(motion.main)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacers.md};
`;

const PlaylistsContainer = () => {
  const playlistContext = useContext(PlaylistContext);
  const renderedPlaylists = playlistContext.state.playlists.map((playlist) => (
    <Playlist key={playlist.id} {...playlist} />
  ));

  return (
    <Main>
      {renderedPlaylists}
      <AddPlaylist />
    </Main>
  );
};

export default PlaylistsContainer;
