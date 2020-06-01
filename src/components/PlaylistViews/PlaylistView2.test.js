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
import PlaylistView2 from './PlaylistView2';

afterEach(cleanup);

function renderPlaylistView2(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <PlaylistView2 {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockNextStep = jest.fn();
const mockSetPlaylistItemURL = jest.fn();

const props = {
  dueDate: '12/31/2020',
  nextStep: mockNextStep,
  playlistId: 1,
  playlistItems: [],
  playlistItemURL: 'http://www.test.com',
  setPlaylistItemURL: mockSetPlaylistItemURL,
  title: 'mock title',
};

test('it renders the correct content', () => {
  renderPlaylistView2(props);

  expect(screen.getByText('mock title')).toBeInTheDocument();
  expect(screen.getByText('0%')).toBeInTheDocument();
  expect(screen.getByText('Due: 12/31/2020')).toBeInTheDocument();
  expect(screen.getByText('+ new item')).toBeInTheDocument();
  expect(screen.getByTestId('progressbar')).toBeInTheDocument();
});

test('it renders playlist items', () => {
  const propsWithItems = {
    ...props,
    playlistItems: [
      {
        id: 1,
        title: 'JavaScript Crash Course',
        url: '#',
        is_complete: true,
        category: null,
        playlist_id: 1,
      },
    ],
  };
  renderPlaylistView2(propsWithItems);

  expect(screen.getByRole('checkbox')).toBeInTheDocument();
});
