import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import Checkbox from '@material-ui/core/Checkbox';
import { PlaylistContext } from '../../contexts/playlistContext';

const A = styled(motion.a).attrs({
  target: '_blank',
})`
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  box-shadow: ${({ theme }) => theme.styles.boxShadowLight};
  color: ${({ theme }) => theme.colors.fontPrimary};
  display: flex;
  margin: 0.5rem 0;
  min-height: ${({ theme }) => theme.spacers.md};
  text-decoration: none;
`;

const P = styled.p`
  flex-grow: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 75%;
`;

const icon = {
  video: <YouTubeIcon fontSize="large" style={{ fill: '#c4302b' }} />,
  audio: <MicNoneOutlinedIcon fontSize="large" style={{ fill: '#8e44ad' }} />,
  article: (
    <DescriptionOutlinedIcon fontSize="large" style={{ fill: '#16a085' }} />
  ),
  other: <AirplayIcon fontSize="large" style={{ fill: '#2c3e50' }} />,
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

  const handleCheckboxToggle = () => {
    playlistContext.patchPlaylistItem(playlist_id, id, {
      playlist_id,
      name,
      category,
      is_complete: !is_complete,
      url,
      is_favorite: false,
    });
  };

  return (
    <A href={url} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
      <Checkbox
        checked={is_complete}
        onChange={() => handleCheckboxToggle()}
        name="checkbox"
        color="default"
      />
      <P>{name}</P>
      {icon[category]}
    </A>
  );
};

PlaylistItem.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number,
  is_complete: PropTypes.bool,
  name: PropTypes.string,
  playlist_id: PropTypes.number,
  url: PropTypes.string,
};

export default PlaylistItem;
