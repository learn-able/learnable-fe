import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import PlaylistView1 from '../PlaylistViews/PlaylistView1';
import PlaylistView2 from '../PlaylistViews/PlaylistView2';
import PlaylistView3 from '../PlaylistViews/PlaylistView3';
import PlaylistView4 from '../PlaylistViews/PlaylistView4';

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
  padding: ${({ theme }) => theme.spacers.xs};
  transform-origin: center;
  width: 25rem;
`;

const Playlist = (props) => {
  const { id, playlistItems, status, title } = props;
  const isNewPlaylist = (id) => (id ? 4 : 1);
  const [step, setStep] = useState(isNewPlaylist(id));
  const [localTitle, setLocalTitle] = useState(title);
  const [playlistItem, setPlaylistItem] = useState(null);

  const nextStep = () => {
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
            nextStep={nextStep}
            onChangeHandler={setLocalTitle}
            title={localTitle}
          />
        );
      case 2:
        return (
          <PlaylistView2
            nextStep={nextStep}
            onChangeHandler={setLocalTitle}
            title={localTitle}
          />
        );
      case 3:
        return (
          <PlaylistView3
            nextStep={nextStep}
            setPlaylistItem={setPlaylistItem}
            playlistItem={playlistItem}
            playlistItems={playlistItems}
            title={localTitle}
          />
        );
      case 4:
        return (
          <PlaylistView4 playlistItems={playlistItems} title={localTitle} />
        );
      default:
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
