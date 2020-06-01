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
import PlaylistView1 from './PlaylistView1';

afterEach(cleanup);

function renderPlaylistView1(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <PlaylistView1 {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockOnChangeHandler = jest.fn();
const mockPostPlaylist = jest.fn();

test('it renders the correct content', () => {
  renderPlaylistView1({
    title: 'mock title',
    onChangeHandler: mockOnChangeHandler,
    playlistDate: '12/31/2020',
    setPlaylistDate: jest.fn(),
  });
  expect(
    screen.getByPlaceholderText('first, name your list:')
  ).toBeInTheDocument();
  expect(screen.getByLabelText('Submit input')).toBeInTheDocument();
});

test('input button defaults to disabled when title value empty string', () => {
  renderPlaylistView1({
    title: '',
    onChangeHandler: mockOnChangeHandler,
    playlistDate: '',
    setPlaylistDate: jest.fn(),
  });

  const button = screen.getByLabelText('Submit input');
  expect(button).toBeDisabled();

  const input = screen.getByPlaceholderText('first, name your list:');
  fireEvent.change(input, { target: { value: 'my new title' } });
  expect(mockOnChangeHandler).toHaveBeenCalledTimes(1);
});

test('input button onclick renders datepicker and removes original button for save button', async () => {
  const userId = 1;
  const props = {
    title: 'mock title',
    onChangeHandler: mockOnChangeHandler,
    playlistDate: '12/31/2020',
    setPlaylistDate: jest.fn(),
  };

  renderPlaylistView1(props, {
    postPlaylist: mockPostPlaylist,
  });

  const button = screen.getByLabelText('Submit input');
  expect(button).not.toBeDisabled();
  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByLabelText('change date')).toBeInTheDocument()
  );

  expect(screen.queryByLabelText('Submit input')).not.toBeInTheDocument();

  expect(screen.getByText('CREATE PLAYLIST')).toBeInTheDocument();

  fireEvent.click(screen.getByText('CREATE PLAYLIST'));
  expect(mockPostPlaylist).toHaveBeenCalledTimes(1);

  expect(mockPostPlaylist).toHaveBeenCalledWith({
    user_id: userId,
    title: props.title,
    due_date: props.playlistDate,
  });
});
