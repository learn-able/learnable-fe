import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { PlaylistContext } from '../../contexts/playlistContext';
import PlaylistView1 from '../PlaylistViews/PlaylistView1';
import PlaylistView2 from '../PlaylistViews/PlaylistView2';
import PlaylistView3 from '../PlaylistViews/PlaylistView3';

const childVariants = {
  active: {
    opacity: 1,
  },
  disabled: {
    opacity: 0,
  },
};

const Section = styled(motion.section)`
  border: 1px solid ${({ theme }) => theme.colors.grayDarker};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  display: flex;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.spacers.xs};
  min-height: min-content;
  overflow: scroll;
  padding: ${({ theme }) => theme.spacers.xs};
  transform-origin: center;
  width: 25rem;
`;

const Playlist = (props) => {
  const playlistContext = useContext(PlaylistContext);
  const { id, due_date, playlist_items, status, title } = props;
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
            nextStep={nextStep}
            playlistId={id}
            playlistItemURL={playlistItemURL}
            playlistItems={playlist_items}
            setPlaylistItemURL={setPlaylistItemURL}
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
            nextStep={nextStep}
            playlistId={id}
            playlistItemURL={playlistItemURL}
            playlistItems={playlist_items}
            setPlaylistItemURL={setPlaylistItemURL}
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

export default Playlist;

// {
//   step > 1 && <button onClick={prevStep}>-</button>;
// }
// {
//   step < 4 && <button onClick={nextStep}>+</button>;
// }
