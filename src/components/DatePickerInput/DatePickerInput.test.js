import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import DatePickerInput from './DatePickerInput';

afterEach(cleanup);

const mockContextNullId = {
  state: {
    playlists: [
      {
        id: 1,
        title: 'Learn Javascript',
        user_id: 1,
        status: 1,
        due_date: '07/04/2020',
        playlistItems: [
          {
            id: 1,
            title: 'JavaScript Crash Course',
            url: '#',
            isComplete: false,
            category: null,
            playlist_id: 1,
          },
        ],
      },
      {
        id: null,
        title: 'Learn Ruby',
        user_id: 1,
        status: 1,
        due_date: '08/14/2020',
        playlistItems: [],
      },
    ],
  },
};

const mockAddplaylist = jest.fn();

function renderAddPlaylist(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <AddPlaylist {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

test('it renders an add playlist button', () => {
  const { getByText } = renderAddPlaylist({}, { state: { playlists: [] } });
  const btn = getByText('Add Playlist');
  expect(btn).toBeInTheDocument();
  expect(btn).not.toBeDisabled();
});

test('it is disabled when last playlist has id of null', () => {
  const { getByText } = renderAddPlaylist({}, mockContextNullId);
  const btn = getByText('Add Playlist');
  expect(btn).toBeDisabled();
});

test('it calls addPlaylist with correct arguments on click', () => {
  const { getByText } = renderAddPlaylist(
    {},
    { state: { playlists: [] }, addPlaylist: mockAddplaylist }
  );
  const btn = getByText('Add Playlist');

  fireEvent.click(btn);
  expect(mockAddplaylist).toHaveBeenCalledTimes(1);
  expect(mockAddplaylist).toHaveBeenCalledWith({
    id: null,
    title: '',
    user_id: 1,
    status: 1,
    due_date: '',
    playlistItems: [],
  });
});
