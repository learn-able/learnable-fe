import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
  const { id, due_date, playlistItems, status, title } = props;
  const isNewPlaylist = (id) => (id ? 3 : 1);
  const [step, setStep] = useState(isNewPlaylist(id));
  const [playlistTitle, setPlaylistTitle] = useState(title);
  // TODO When a Playlist item is submitted, within that function, we will need to set the value of playlistItem back to an empty string. Currently it is persisting.
  const [playlistItemURL, setPlaylistItemURL] = useState('');
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
            setPlaylistItemURL={setPlaylistItemURL}
            playlistItemURL={playlistItemURL}
            playlistItems={playlistItems}
            title={playlistTitle}
          />
        );
      case 3:
        return (
          <PlaylistView3
            prevStep={prevStep}
            setPlaylistItemURL={setPlaylistItemURL}
            playlistItemTitle={playlistItemTitle}
            setPlaylistItemTitle={setPlaylistItemTitle}
            playlistItemURL={playlistItemURL}
            playlistItems={playlistItems}
            title={playlistTitle}
          />
        );
      default:
        return (
          <PlaylistView2
            dueDate={playlistDate}
            nextStep={nextStep}
            setPlaylistItemURL={setPlaylistItemURL}
            playlistItemURL={playlistItemURL}
            playlistItems={playlistItems}
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
