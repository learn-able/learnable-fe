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
import Playlist from './Playlist';

afterEach(cleanup);

function renderPlaylist(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Playlist {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockPostPlaylistItem = jest.fn();

function getDateToday() {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  return `${mm}/${dd}/${yyyy}`;
}

test('it renders an input and button when its id is null', () => {
  renderPlaylist({
    id: null,
    due_date: '',
    playlist_items: [],
    title: '',
  });
  expect(
    screen.getByPlaceholderText('first, name your list:')
  ).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('it renders DatePickerInput when title entered and defaults to current date', () => {
  const today = getDateToday();
  renderPlaylist({
    id: 1,
    due_date: '',
    playlist_items: [],
    title: 'mockTitle',
  });

  expect(screen.getByText(`Due: ${today}`)).toBeInTheDocument();
});

test('it renders child components Dropdown, NewPlaylistItemBar, ProgressBar', () => {
  const today = getDateToday();
  renderPlaylist({
    id: 1,
    due_date: today,
    playlist_items: [],
    title: 'mockTitle',
  });

  // Dropdown
  expect(screen.getByLabelText('more')).toBeInTheDocument();

  // NewPlaylistItemBar
  expect(screen.getByText('0%')).toBeInTheDocument();
  expect(screen.getByText('mockTitle')).toBeInTheDocument();

  // ProgressBar
  expect(screen.getByTestId('progressbar')).toBeInTheDocument();
});

test('it renders NoItemsButton when playlist_items.length is 0 and allows item to be added', async () => {
  const today = getDateToday();
  renderPlaylist(
    {
      id: 1,
      due_date: today,
      playlist_items: [],
      title: 'mockTitle',
    },
    {
      postPlaylistItem: mockPostPlaylistItem,
    }
  );

  const button = screen.getByText(
    "You haven't added any items to this list. Click here to get started!"
  );

  expect(button).toBeInTheDocument();

  // expect url input field to appear when button clicked
  fireEvent.click(button);

  await waitFor(() =>
    expect(
      screen.getByPlaceholderText('now, add an item URL:')
    ).toBeInTheDocument()
  );

  // "+ new item" button changes to "- close"
  expect(screen.getByText('- close')).toBeInTheDocument();

  // enter a URL
  fireEvent.change(screen.getByPlaceholderText('now, add an item URL:'), {
    target: {
      value: 'http://www.google.com',
    },
  });

  // submit the URL
  const submitUrlButton = screen.getByLabelText('Submit input');
  fireEvent.click(submitUrlButton);

  // input for playlistItem title rendered
  await waitFor(() => {
    expect(
      screen.getByPlaceholderText('what should we call this?')
    ).toBeInTheDocument();
  });

  // enter an item title
  fireEvent.change(screen.getByPlaceholderText('what should we call this?'), {
    target: {
      value: 'My list item',
    },
  });

  // item title is rendered to screen
  await waitFor(() =>
    expect(screen.getByText('My list item')).toBeInTheDocument()
  );

  // expect category buttons to be in document
  expect(screen.getByText('video')).toBeInTheDocument();
  expect(screen.getByText('audio')).toBeInTheDocument();
  expect(screen.getByText('article')).toBeInTheDocument();
  expect(screen.getByText('other')).toBeInTheDocument();

  fireEvent.click(screen.getByText('video'));

  fireEvent.click(screen.getByText('Done'));

  // submits new item to endpoint
  expect(mockPostPlaylistItem).toHaveBeenCalledTimes(1);
  expect(mockPostPlaylistItem).toHaveBeenCalledWith({
    category: 'video',
    is_complete: false,
    name: 'My list item',
    playlist_id: 1,
    url: 'http://www.google.com',
  });
});
