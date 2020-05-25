import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';
import Playlist from '../Playlist/Playlist';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

const parentVariants = {
  active: {
    transition: {
      delay: 1,
      staggerChildren: 0.1
    },
  },
  disabled: {
    transition: {
      delay: 1
    }
  }
};

const Main = styled(motion.main)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacers.md};
`;

const PlaylistsContainer = () => {
  const playlistContext = useContext(PlaylistContext);
  const renderedPlaylists = playlistContext.state.playlists.map((playlist) => {
    return <Playlist key={playlist.id} {...playlist} />
  });

  const mapTest = [0, 1, 2].map(value => (
    <Playlist />
  ))

  return (
    <Main
      variants={parentVariants}
      initial="disabled"
      animate="active"
    >
      {mapTest}
      <AddPlaylist />
    </Main>
  );
};

export default PlaylistsContainer;
