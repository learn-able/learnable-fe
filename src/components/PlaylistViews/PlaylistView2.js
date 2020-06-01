import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import DueDate from '../DueDate/DueDate';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';

const Div = styled.div`
  flex-grow: 1;
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
  if (!playlistItems) {
    playlistItems = [];
  }
  const items = playlistItems.map((item) => (
    <PlaylistItem key={item.id} playlistId={playlistId} {...item} />
  ));

  return (
    <>
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <DueDate dueDate={dueDate} />
      <ProgressBar playlistItems={playlistItems} />
      <Div>
        <NewPlaylistItemBar
          nextStep={nextStep}
          playlistItemURL={playlistItemURL}
          playlistItems={playlistItems}
          setPlaylistItemURL={setPlaylistItemURL}
        />
        {items}
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
