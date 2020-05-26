import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import PlaylistItemContainer from '../PlaylistItemContainer/PlaylistItemContainer';

const PlaylistView4 = ({
  nextStep,
  playlistItem,
  playlistItems,
  setPlaylistItem,
  title,
}) => (
  <>
    <PlaylistTitle title={title} playlistItems={playlistItems} />
    <ProgressBar playlistItems={playlistItems} />
    <PlaylistItemContainer
      nextStep={nextStep}
      playlistItem={playlistItem}
      playlistItems={playlistItems}
      setPlaylistItem={setPlaylistItem}
    />
  </>
);

export default PlaylistView4;
