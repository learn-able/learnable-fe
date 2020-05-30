import { useContext } from 'react';
import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import Checkbox from '@material-ui/core/Checkbox';
import { PlaylistContext } from '../../contexts/playlistContext';

const Div = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grayDarker};
  display: flex;
  margin: 0.5rem 0;
  min-height: ${({ theme }) => theme.spacers.md};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
`;

const P = styled.p`
  flex-grow: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 70%;
`;

const icon = {
  video: <YouTubeIcon fontSize="large" />,
  audio: <MicNoneOutlinedIcon fontSize="large" />,
  article: <DescriptionOutlinedIcon fontSize="large" />,
  other: <AirplayIcon fontSize="large" />,
};

const PlaylistItem = ({
  category,
  id,
  is_complete,
  name,
  playlist_id,
  url,
}) => {
  const playlistContext = useContext(PlaylistContext);
  const mockToggleIsComplete = () => {
    playlistContext.updatePlaylistItem({
      id,
      playlist_id,
      name,
      category,
      url,
      is_complete: !is_complete,
    });
  };

  return (
    <Div>
      <Checkbox
        checked={is_complete}
        onChange={() => mockToggleIsComplete()}
        name="checkbox"
        color="primary"
      />
      <P>{name}</P>
      {icon[category]}
    </Div>
  );
};

export default PlaylistItem;
