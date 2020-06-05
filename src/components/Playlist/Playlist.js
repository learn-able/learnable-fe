import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { PlaylistContext } from '../../contexts/playlistContext';
import PlaylistView1 from '../PlaylistViews/PlaylistView1';
import PlaylistView2 from '../PlaylistViews/PlaylistView2';
import PlaylistView3 from '../PlaylistViews/PlaylistView3';

const Playlist = ({
  id,
  due_date,
  is_favorite: isFavorite,
  playlist_items,
  status,
  title,
}) => {
  const playlistContext = useContext(PlaylistContext);
  const isNewPlaylist = (id) => (id ? 2 : 1);
  const [step, setStep] = useState(isNewPlaylist(id));
  const [playlistTitle, setPlaylistTitle] = useState(title);
  const [playlistItemURL, setPlaylistItemURL] = useState('');
  const [category, setCategory] = useState(null);
  const [playlistItemTitle, setPlaylistItemTitle] = useState('');
  const [playlistDate, setPlaylistDate] = useState(
    due_date || moment().format('MM/DD/YYYY')
  );

  const nextStep = () => {
    if (step > 3) {
      setStep(3);
      return;
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const newPlaylistItem = {
      playlist_id: id,
      name: playlistItemTitle,
      category,
      url: playlistItemURL,
      is_complete: false,
    };

    playlistContext.postPlaylistItem(newPlaylistItem);
    setPlaylistItemTitle('');
    setPlaylistItemURL('');
    setCategory('');
    prevStep();
  };

  const switchViews = () => {
    switch (step) {
      case 1:
        return (
          <PlaylistView1
            onChangeHandler={setPlaylistTitle}
            playlistDate={playlistDate}
            setPlaylistDate={setPlaylistDate}
            title={playlistTitle}
          />
        );
      case 2:
        return (
          <PlaylistView2
            dueDate={playlistDate}
            isFavorite={isFavorite}
            nextStep={nextStep}
            playlistId={id}
            playlistItemURL={playlistItemURL}
            playlistItems={playlist_items}
            setPlaylistItemURL={setPlaylistItemURL}
            status={status}
            title={playlistTitle}
          />
        );
      case 3:
        return (
          <PlaylistView3
            category={category}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
            playlistItems={playlist_items}
            playlistItemTitle={playlistItemTitle}
            playlistItemURL={playlistItemURL}
            setCategory={setCategory}
            setPlaylistItemTitle={setPlaylistItemTitle}
            setPlaylistItemURL={setPlaylistItemURL}
            title={playlistTitle}
          />
        );
      default:
        return (
          <PlaylistView2
            dueDate={playlistDate}
            isFavorite={isFavorite}
            nextStep={nextStep}
            playlistId={id}
            playlistItemURL={playlistItemURL}
            playlistItems={playlist_items}
            setPlaylistItemURL={setPlaylistItemURL}
            status={status}
            title={playlistTitle}
          />
        );
    }
  };

  return (
    <Section variants={childVariants} whileHover={{ scale: 1.02 }}>
      {switchViews(step)}
    </Section>
  );
};

const Section = styled(motion.section)`
  border: 0.25px solid ${({ theme }) => theme.colors.grayLight};
  background-color: #fff;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 ${({ theme }) => theme.spacers.xs};
  min-height: 25rem;
  height: 90%;
  overflow: scroll;
  padding: ${({ theme }) => theme.spacers.xs};
  position: relative;
  transform-origin: center;
  min-width: 375px;
  width: 30vw;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
`;

const childVariants = {
  active: {
    opacity: 1,
  },
  disabled: {
    opacity: 0,
  },
};

Playlist.propTypes = {
  id: PropTypes.number,
  due_date: PropTypes.string,
  playlist_items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      playlist_id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      is_complete: PropTypes.bool,
      created_at: PropTypes.string,
      Updated_at: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default Playlist;
