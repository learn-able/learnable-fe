import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import PlaylistItem from './PlaylistItem';

afterEach(cleanup);

function renderPlaylistItem(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <PlaylistItem {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockPatchPlaylist = jest.fn();

const props = {
  category: 'video',
  id: 1,
  is_complete: false,
  name: 'JavaScript video',
  playlist_id: 1,
  url: 'http://www.test.com',
};

test('it renders the correct content', () => {
  const { getByRole, getByText } = renderPlaylistItem(props);
  const cb = getByRole('checkbox');
  const title = getByText('JavaScript video');

  expect(cb).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test('it invokes onClick event when checkbox toggled', async () => {
  const { getByRole } = renderPlaylistItem(props, {
    patchPlaylistItem: mockPatchPlaylist,
  });
  const cb = getByRole('checkbox');

  fireEvent.click(cb);
  expect(mockPatchPlaylist).toHaveBeenCalledTimes(1);
  expect(mockPatchPlaylist).toHaveBeenCalledWith(props.playlist_id, props.id, {
    is_complete: !props.is_complete,
    category: 'video',
    name: 'JavaScript video',
    playlist_id: 1,
    url: 'http://www.test.com',
    is_favorite: false,
  });
});
