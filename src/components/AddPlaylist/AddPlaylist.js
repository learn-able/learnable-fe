import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';

const AddPlaylist = () => {
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  let isDisabled = false;

  if (playlists.length) {
    isDisabled = !playlists[playlists.length - 1].id;
  }

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() =>
          playlistContext.addPlaylist({
            id: null,
            title: '',
            user_id: 1,
            status: 'valid',
            due_date: '',
            playlist_items: [],
          })
        }
        disabled={isDisabled}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
        whileHover={!isDisabled && { scale: 1.025 }}
        whileTap={!isDisabled && { scale: 0.98 }}
      >
        Add Playlist
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 1rem;
`

const Button = styled(motion.button)`
  background: transparent;
  border: 1px dashed ${({ theme }) => theme.colors.grayDark};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.md};
  height: 10rem;
  margin: 2.5rem;
  min-width: 25rem;
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

export default AddPlaylist;
