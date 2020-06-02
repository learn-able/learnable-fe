import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import DueDate from '../DueDate/DueDate';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';
import Dropdown from '../Dropdown/Dropdown';

const Div = styled.div`
  flex-grow: 1;
`;

const NoItemsButton = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  background: none;
  border: 1px dashed ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;
  margin: 0.5rem 0;
  min-height: ${({ theme }) => theme.spacers.md};
  padding: ${({ theme }) => theme.spacers.xs};
  width: 100%;

  &:hover {
    border: 1px dashed ${({ theme }) => theme.colors.grayDark};
    color: ${({ theme }) => theme.colors.grayDark};
    cursor: pointer;
  }

  ${({ inputActive }) =>
    inputActive &&
    css`
      display: none;

      &:hover {
        cursor: auto;
      }
    `}
`;

const PlaylistView2 = ({
  dueDate,
  nextStep,
  playlistId,
  playlistItems,
  playlistItemURL,
  setPlaylistItemURL,
  title,
}) => {
  const [inputActive, toggleInputActive] = useState(false);

  if (!playlistItems) {
    playlistItems = [];
  }
  const items = playlistItems.map((item) => (
    <PlaylistItem key={item.id} playlistId={playlistId} {...item} />
  ));

  return (
    <>
      <Dropdown playlistId={playlistId} />
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <DueDate dueDate={dueDate} />
      <ProgressBar playlistItems={playlistItems} />
      <Div>
        <NewPlaylistItemBar
          inputActive={inputActive}
          toggleInputActive={toggleInputActive}
          nextStep={nextStep}
          playlistItemURL={playlistItemURL}
          playlistItems={playlistItems}
          setPlaylistItemURL={setPlaylistItemURL}
        />
        {items.length ? (
          items
        ) : (
          <NoItemsButton
            inputActive={inputActive}
            onClick={() => toggleInputActive(!inputActive)}
          >
            You haven't added any items to this list. Click here to get started!
          </NoItemsButton>
        )}
      </Div>
    </>
  );
};

PlaylistView2.propTypes = {
  dueDate: PropTypes.string,
  nextStep: PropTypes.func,
  playlistId: PropTypes.number,
  playlistItems: PropTypes.arrayOf(PropTypes.object),
  playlistItemURL: PropTypes.string,
  setPlaylistItemURL: PropTypes.func,
  title: PropTypes.string,
};

export default PlaylistView2;
