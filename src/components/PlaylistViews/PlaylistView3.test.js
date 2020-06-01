import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import { mockPlaylistData } from '../../../mockData/mockData';
import PlaylistView3 from './PlaylistView3';

afterEach(cleanup);

function renderPlaylistView3(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <PlaylistView3 {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockHandleSubmit = jest.fn();
const mockPrevStep = jest.fn();
const mockSetCategory = jest.fn();
const mockSetPlaylistItemTitle = jest.fn();
const mockSetPlaylistItemURL = jest.fn();

const props = {
  category: 'video',
  handleSubmit: mockHandleSubmit,
  prevStep: mockPrevStep,
  playlistItemTitle: 'JavaScript video',
  setCategory: mockSetCategory,
  setPlaylistItemTitle: mockSetPlaylistItemTitle,
};

test('it renders the correct content', () => {
  renderPlaylistView3(props);

  expect(screen.getByText('JavaScript video')).toBeInTheDocument();
  expect(screen.getByText('video')).toBeInTheDocument();
  expect(screen.getByText('audio')).toBeInTheDocument();
  expect(screen.getByText('article')).toBeInTheDocument();
  expect(screen.getByText('other')).toBeInTheDocument();
  expect(screen.getByText('Done')).toBeInTheDocument();
  expect(screen.getByText('Cancel')).toBeInTheDocument();
});

test('it invokes setPlaylistItemTitle with correct arguments', () => {
  renderPlaylistView3(props);
  fireEvent.change(screen.getByLabelText('Playlist item title'), {
    target: { value: 'test' },
  });
  expect(mockSetPlaylistItemTitle).toHaveBeenCalledTimes(1);
  expect(mockSetPlaylistItemTitle).toHaveBeenCalledWith('test');
});

test('it invokes setCategory with correct arguments', () => {
  renderPlaylistView3(props);
  fireEvent.click(screen.getByText('video'));
  expect(mockSetCategory).toHaveBeenCalledTimes(1);
  expect(mockSetCategory).toHaveBeenCalledWith('video');
});

test('it invokes prevClick on cancel', () => {
  renderPlaylistView3(props);
  fireEvent.click(screen.getByText('Cancel'));
  expect(mockPrevStep).toHaveBeenCalledTimes(1);
});

test('it invokes handleSubmit onClick of done button', () => {
  renderPlaylistView3(props);
  fireEvent.click(screen.getByText('Done'));
  expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
});
