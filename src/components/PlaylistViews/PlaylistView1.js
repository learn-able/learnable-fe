import { useState } from 'react';
import styled from 'styled-components';
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
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const PlaylistView1 = ({ nextStep, onChangeHandler, title }) => {
  const [ step, setStep ] = useState(1);

  return (
  <Div>
      {step === 1 &&
      <Input
        id="title"
        hasButton
        label="Title"
        onButtonClick={() => setStep(2)}
        onChangeHandler={(e) => onChangeHandler(e.target.value)}
        placeholder="first, name your list:"
        type="text"
        value={title}
      />}
      {step === 2 &&
      <Input
        id="title"
        label="Title"
        onChangeHandler={(e) => onChangeHandler(e.target.value)}
        placeholder="first, name your list:"
        type="text"
        value={title}
      />}
      {step === 2 && <DatePickerInput />}
    {step === 2 && <ButtonWrapper><Button onClick={() => nextStep()}>CREATE PLAYLIST</Button></ButtonWrapper>}
  </Div>
  )
};

export default PlaylistView1;
