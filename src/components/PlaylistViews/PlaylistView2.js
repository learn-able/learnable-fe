import styled from 'styled-components';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import DueDate from '../DueDate/DueDate';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';

const Div = styled.div`
  flex-grow: 1;
`;

const PlaylistView3 = ({
  dueDate,
  nextStep,
  playlistItem,
  playlistItems,
  setPlaylistItem,
  title,
}) => {
  const items = playlistItems.map((item) => (
    <PlaylistItem key={item.id} {...item} />
  ));

  return (
    <>
      2
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <DueDate dueDate={dueDate} />
      <ProgressBar playlistItems={playlistItems} />
      <Div>
        <NewPlaylistItemBar
          nextStep={nextStep}
          setPlaylistItem={setPlaylistItem}
          playlistItem={playlistItem}
          playlistItems={playlistItems}
        />
        {items}
      </Div>
    </>
  );
};

export default PlaylistView3;
