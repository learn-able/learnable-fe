import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import Playlist from '../Playlist/Playlist';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import PlaylistViewSmall from '../PlaylistViews/PlaylistViewSmall';

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
  padding: 0.5rem 2.5rem 0 2.5rem;
  flex-grow: 1;
  width: 100vw;
  overflow: scroll;
  background-color: #F9F9F9;
  color: ${({ theme }) => theme.colors.fontPrimary};

  ${({ view }) =>
    !view &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `}
`;

const PlaylistsContainer = () => {
  const appSettingsContext = useContext(AppSettingsContext);
  const { view } = appSettingsContext.state;
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;

  const renderedPlaylists = playlists.map((playlist) => (
    <Playlist key={playlist.id} {...playlist} />
  ));

  const renderedPlaylistsSmall = playlists.map((playlist) => (
    <PlaylistViewSmall key={playlist.id} {...playlist} />
  ));


  return (
    <Main
      variants={parentVariants}
      initial="disabled"
      animate={playlists.length ? 'active' : 'disabled'}
      view={view}
      style={view === true ? null : {flexWrap: "wrap", justifyContent: "center",}}
    >
    {console.log(view)}
      {view === true ? renderedPlaylists : renderedPlaylistsSmall}
      {view === true ? <AddPlaylist /> : null}
    </Main>
  );
};

export default PlaylistsContainer;
