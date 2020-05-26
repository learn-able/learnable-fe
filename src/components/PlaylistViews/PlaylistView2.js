import styled from 'styled-components';
import Input from '../Input/Input';
import DatePickerInput from '../DatePickerInput/DatePickerInput';

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

const PlaylistView2 = ({ nextStep, onChangeHandler, title }) => (
  <>
    <Input
      id="playlist-title"
      label="Title"
      onChangeHandler={(e) => onChangeHandler(e.target.value)}
      placeholder="first, name your list:"
      type="text"
      value={title}
    />
    <DatePickerInput />
    <Button onClick={() => nextStep()}>SAVE</Button>
  </>
);

export default PlaylistView2;
