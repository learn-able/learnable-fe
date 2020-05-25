import { motion } from "framer-motion";
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';

const variants = {
  start: {
    opacity: 0,
    scaleX: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  end: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.25
    }
  }
};

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
        className="test"
        variants={variants}
        initial="start"
        animate="end"
        whileHover={!isDisabled && { scale: 1.025 }}
        whileTap={!isDisabled && { scale: 0.98 }}
      >
        Add Playlist
      </Button>
    </>
  );
};

export default AddPlaylist;
