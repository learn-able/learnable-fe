import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import PlaylistItemContainer from '../PlaylistItemContainer/PlaylistItemContainer';
import DueDate from '../DueDate/DueDate';

const PlaylistView3 = ({
  dueDate,
  nextStep,
  playlistItem,
  playlistItems,
  setPlaylistItem,
  title,
}) => (
  <>
    2
    <PlaylistTitle title={title} playlistItems={playlistItems} />
    <DueDate dueDate={dueDate} />
    <ProgressBar playlistItems={playlistItems} />
    <PlaylistItemContainer
      nextStep={nextStep}
      playlistItem={playlistItem}
      playlistItems={playlistItems}
      setPlaylistItem={setPlaylistItem}
    />
  </>
);

export default PlaylistView3;
