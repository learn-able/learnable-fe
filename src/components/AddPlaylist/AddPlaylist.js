import React, { useContext } from 'react';
import Styled, { css } from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';

const Button = Styled.button`
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
      >
        Add Playlist
      </Button>
    </>
  );
};

export default AddPlaylist;
