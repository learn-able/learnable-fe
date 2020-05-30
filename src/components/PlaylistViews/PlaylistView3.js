import { useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import styled from 'styled-components';
import Input from '../Input/Input';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const buttons = [
  { label: 'video', icon: <YouTubeIcon fontSize="large" /> },
  { label: 'audio', icon: <MicNoneOutlinedIcon fontSize="large" /> },
  { label: 'article', icon: <DescriptionOutlinedIcon fontSize="large" /> },
  { label: 'other', icon: <AirplayIcon fontSize="large" /> },
];

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
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
  category,
  handleSubmit,
  prevStep,
  playlistItemTitle,
  playlistItemURL,
  playlistItems,
  setCategory,
  setPlaylistItemURL,
  setPlaylistItemTitle,
  title,
}) => (
  <>
    3
    <PlaylistItem category={category} name={playlistItemTitle} />
    <Input
      label="Playlist item title"
      onChangeHandler={(e) => setPlaylistItemTitle(e.target.value)}
      placeholder="what should we call this?"
      type="text"
      value={playlistItemTitle}
    />
    <Grid>
      {buttons.map((btn) => (
        <Button key={btn.label} onClick={() => setCategory(btn.label)}>
          {btn.icon}
          {btn.label}
        </Button>
      ))}
    </Grid>
    <DoneButton onClick={() => handleSubmit()}>Done</DoneButton>
    <Span onClick={() => prevStep()}>Cancel</Span>
  </>
);

export default PlaylistView3;
