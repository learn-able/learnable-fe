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

  const handleSubmit = () => {
    const newPlaylist = {
      user_id: 1,
      title,
      due_date: playlistDate,
    };

    playlistContext.postPlaylist(newPlaylist);
  };

  return (
    <Div>
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
          <Button onClick={() => handleSubmit()}>CREATE PLAYLIST</Button>
        </ButtonWrapper>
      )}
    </Div>
  );
};

export default PlaylistView1;
