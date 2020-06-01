import PropTypes from 'prop-types';
import { useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import styled from 'styled-components';
import Input from '../Input/Input';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const buttons = [
  {
    label: 'video',
    icon: <YouTubeIcon fontSize="large" style={{ fill: '#c4302b' }} />,
  },
  {
    label: 'audio',
    icon: <MicNoneOutlinedIcon fontSize="large" style={{ fill: '#8e44ad' }} />,
  },
  {
    label: 'article',
    icon: (
      <DescriptionOutlinedIcon fontSize="large" style={{ fill: '#16a085' }} />
    ),
  },
  {
    label: 'other',
    icon: <AirplayIcon fontSize="large" style={{ fill: '#2c3e50' }} />,
  },
];

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.fontPrimary};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 6rem;
  width: 100%;
`;

const DoneButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: #3498db;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  cursor: pointer;
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
  color: #c0392b;
  font-size: 0.85rem;
  margin: 0.25rem 0;
  text-align: center;
  cursor: pointer;
`;

const PlaylistView3 = ({
  category,
  handleSubmit,
  prevStep,
  playlistItemTitle,
  setCategory,
  setPlaylistItemTitle,
}) => (
  <>
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
    <div style={{ textAlign: 'center' }}>
      <DoneButton onClick={() => handleSubmit()}>Done</DoneButton>
      <Span onClick={() => prevStep()}>Cancel</Span>
    </div>
  </>
);

PlaylistView3.propTypes = {
  category: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  playlistItemTitle: PropTypes.string,
  setCategory: PropTypes.func.isRequired,
  setPlaylistItemTitle: PropTypes.func.isRequired,
};

export default PlaylistView3;
