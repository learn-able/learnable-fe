import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';

const buttons = [
  { label: 'Video', icon: <YouTubeIcon fontSize="large" /> },
  { label: 'Audio', icon: <MicNoneOutlinedIcon fontSize="large" /> },
  { label: 'Article', icon: <DescriptionOutlinedIcon fontSize="large" /> },
  { label: 'Other', icon: <AirplayIcon fontSize="large" /> },
];

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 6rem;
  width: 100%;
`;

const DoneButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  height: 2.5rem;
  margin: 2.5rem 0 0.5rem 0;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacers.xxs};
`;

const Span = styled.span`
  color: red;
  text-align: center;
`;

const PlaylistView3 = ({
  prevStep,
  playlistItem,
  playlistItems,
  setPlaylistItem,
  title,
}) => (
  <>
    3
    <PlaylistItem />
    <Input
      label="Playlist item title"
      onChangeHandler={() => console.log('boop')}
      placeholder="what should we call this?"
      type="text"
      value=""
    />
    <Grid>
      {buttons.map((btn) => (
        <Button key={btn.label}>
          {btn.icon}
          {btn.label}
        </Button>
      ))}
    </Grid>
    <DoneButton onClick={() => prevStep()}>Done</DoneButton>
    <Span onClick={() => prevStep()}>Cancel</Span>
  </>
);

export default PlaylistView3;
