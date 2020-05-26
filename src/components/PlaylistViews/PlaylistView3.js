import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import PlaylistItemContainer from '../PlaylistItemContainer/PlaylistItemContainer';

const PlaylistView3 = ({
  nextStep,
  onChangeHandler,
  playlistItem,
  playlistItems,
  title,
}) => (
  <>
    <PlaylistTitle title={title} playlistItems={playlistItems} />
    <ProgressBar playlistItems={playlistItems} />
    <PlaylistItemContainer
      nextStep={nextStep}
      onChangeHandler={onChangeHandler}
      playlistItem={playlistItem}
      playlistItems={playlistItems}
    />
  </>
);

export default PlaylistView3;
