import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';

const Button = styled(motion.button)`
  border: 1px dashed ${({ theme }) => theme.colors.grayDark};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.md};
  height: 10rem;
  width: 25rem;

  &:hover {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px dashed ${({ theme }) => theme.colors.grayLight};
      color: ${({ theme }) => theme.colors.grayLight};

      &:hover {
        cursor: auto;
      }
    `}
`;

const AddPlaylist = () => {
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  let isDisabled = false;

  if (playlists.length) {
    isDisabled = !playlists[playlists.length - 1].id;
  }

  return (
    <>
      <Button
        type="button"
        onClick={playlistContext.addPlaylist}
        disabled={isDisabled}
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 0.6}}}
        whileHover={!isDisabled && { scale: 1.025 }}
        whileTap={!isDisabled && { scale: 0.98 }}
      >
        Add Playlist
      </Button>
    </>
  );
};

export default AddPlaylist;
