import { useContext, useState } from 'react';
import styled from 'styled-components';
import { PlaylistContext } from '../../contexts/playlistContext';
import DatePickerInput from '../DatePickerInput/DatePickerInput';
import Input from '../Input/Input';

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  height: 2.5rem;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PlaylistView1 = ({
  onChangeHandler,
  playlistDate,
  setPlaylistDate,
  title,
}) => {
  const playlistContext = useContext(PlaylistContext);
  const [step, setStep] = useState(1);

  const mockPost = () => {
    const newPlaylist = {
      id: 3,
      title: 'Learn TypeScript',
      user_id: 1,
      status: 1,
      due_date: '',
      playlistItems: [],
    };

    playlistContext.removePlaylist();
    playlistContext.addPlaylist(newPlaylist);
  };

  return (
    <Div>
      1
      {step === 1 && (
        <Input
          id="title"
          hasButton
          label="Title"
          onButtonClick={() => setStep(2)}
          onChangeHandler={(e) => onChangeHandler(e.target.value)}
          placeholder="first, name your list:"
          type="text"
          value={title}
        />
      )}
      {step === 2 && (
        <Input
          label="Title"
          onChangeHandler={(e) => onChangeHandler(e.target.value)}
          placeholder="first, name your list:"
          type="text"
          value={title}
        />
      )}
      {step === 2 && (
        <DatePickerInput
          playlistDate={playlistDate}
          setPlaylistDate={setPlaylistDate}
        />
      )}
      {step === 2 && (
        <ButtonWrapper>
          <Button onClick={() => mockPost()}>CREATE PLAYLIST</Button>
        </ButtonWrapper>
      )}
    </Div>
  );
};

export default PlaylistView1;
