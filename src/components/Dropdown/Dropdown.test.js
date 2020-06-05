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
import Dropdown from './Dropdown';

afterEach(cleanup);

function renderDropdown(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Dropdown {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockProps = {
  playlistId: 1,
  isFavorite: false,
  status: 'valid',
  dueDate: '12/31/2020',
  title: 'mock title',
};
const mockPatchPlaylist = jest.fn();
const mockDeletePlaylist = jest.fn();

test('it renders a dropdown button unhides a menu when clicked', async () => {
  renderDropdown(mockProps);
  const button = screen.getByLabelText('more');

  expect(button).toBeInTheDocument();
  expect(screen.queryByRole('presentation')).not.toBeInTheDocument();

  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  );
});

test('it invokes archive when archive menuitem clicked', async () => {
  renderDropdown(mockProps, {
    patchPlaylist: mockPatchPlaylist,
  });
  const button = screen.getByLabelText('more');

  expect(button).toBeInTheDocument();
  expect(screen.queryByRole('presentation')).not.toBeInTheDocument();

  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  );

  const archiveMenuItem = screen.getByText('Archive');

  fireEvent.click(archiveMenuItem);

  expect(mockPatchPlaylist).toHaveBeenCalledTimes(1);
  expect(mockPatchPlaylist).toHaveBeenCalledWith(1, {
    status: 'archived',
    due_date: '12/31/2020',
    is_favorite: false,
    title: 'mock title',
  });
});

test('it invokes delete when delete menuitem clicked', async () => {
  renderDropdown(mockProps, {
    deletePlaylist: mockDeletePlaylist,
  });
  const button = screen.getByLabelText('more');

  expect(button).toBeInTheDocument();
  expect(screen.queryByRole('presentation')).not.toBeInTheDocument();

  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  );

  const deleteMenuItem = screen.getByText('Delete');

  fireEvent.click(deleteMenuItem);

  expect(mockDeletePlaylist).toHaveBeenCalledTimes(1);
  expect(mockDeletePlaylist).toHaveBeenCalledWith(1);
});
