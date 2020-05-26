import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import PlaylistItemContainer from '../PlaylistItemContainer/PlaylistItemContainer';

const PlaylistView4 = ({ title, playlistItems }) => (
  <>
    <PlaylistTitle title={title} playlistItems={playlistItems} />
    <ProgressBar playlistItems={playlistItems} />
    <PlaylistItemContainer playlistItems={playlistItems} />
  </>
);

export default PlaylistView4;
