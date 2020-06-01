import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';
import Playlist from '../Playlist/Playlist';
import AddPlaylist from '../AddPlaylist/AddPlaylist';

const parentVariants = {
  active: {
    transition: {
      delay: 1,
      staggerChildren: 0.2,
    },
  },
  disabled: {
    transition: {
      delay: 1,
    },
  },
};

const Main = styled(motion.main)`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 2.5rem;
  flex-grow: 1;
  background-color: #F9F9F9;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const PlaylistsContainer = () => {
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  const renderedPlaylists = playlists.map((playlist) => (
    <Playlist key={playlist.id} {...playlist} />
  ));

  return (
    <Main
      variants={parentVariants}
      initial="disabled"
      animate={playlists.length ? 'active' : 'disabled'}
    >
      {renderedPlaylists}
      <AddPlaylist />
    </Main>
  );
};

export default PlaylistsContainer;
