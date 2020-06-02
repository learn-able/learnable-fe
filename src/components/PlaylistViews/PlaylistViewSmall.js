import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import DueDate from '../DueDate/DueDate';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';
import Dropdown from '../Dropdown/Dropdown';

const childVariants = {
  active: {
    opacity: 1,
  },
  disabled: {
    opacity: 0,
  },
};

const Div = styled(motion.div)`
  border: solid 1px ${({ theme }) => theme.colors.grayLight};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  height: 15rem;
  margin: 1.2rem;
  padding: 2.5rem;
  position: relative;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  flex-basis: 25%;
`;

const PlaylistView2 = ({ due_date, id, playlist_items, title }) => {
  if (!playlist_items) {
    playlist_items = [];
  }

  return (
    <Div variants={childVariants} whileHover={{ scale: 1.02 }}>
      <Dropdown playlistId={id} />
      <PlaylistTitle title={title} playlistItems={playlist_items} />
      <DueDate dueDate={due_date} />
      <ProgressBar playlistItems={playlist_items} />
    </Div>
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
