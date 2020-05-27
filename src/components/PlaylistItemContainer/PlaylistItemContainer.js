import styled from 'styled-components';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';

const Div = styled.div`
  flex-grow: 1;
`;

const PlaylistItemContainer = ({
  nextStep,
  playlistItem,
  playlistItems,
  setPlaylistItem,
}) => {
  const items = playlistItems.map((item) => (
    <PlaylistItem key={item.id} {...item} />
  ));

  return (
    <Div>
      <NewPlaylistItemBar
        nextStep={nextStep}
        setPlaylistItem={setPlaylistItem}
        playlistItem={playlistItem}
        playlistItems={playlistItems}
      />
      {items}
    </Div>
  );
};

export default PlaylistItemContainer;
