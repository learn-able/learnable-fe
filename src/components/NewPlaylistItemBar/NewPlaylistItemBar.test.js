import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import NewPlaylistItemBar from './NewPlaylistItemBar';

afterEach(cleanup);

function renderNewPlaylistItemBar(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <NewPlaylistItemBar {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockToggleInputActive = jest.fn();

const mockPropsNoItems = {
  inputActive: false,
  nextStep: jest.fn(),
  playlistItems: [],
  playlistItemURL: 'mockURL',
  setPlaylistItemURL: jest.fn(),
  toggleInputActive: mockToggleInputActive,
};

const mockProps = {
  inputActive: false,
  nextStep: jest.fn(),
  playlistItems: [{}, {}, {}],
  playlistItemURL: 'mockURL',
  setPlaylistItemURL: jest.fn(),
  toggleInputActive: mockToggleInputActive,
};

test('it renders a counter and button', () => {
  const { getByRole, getByText } = renderNewPlaylistItemBar(mockPropsNoItems);
  const counter = getByText('0');
  const button = getByRole('button');

  expect(counter).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('it renders a counter showing length of items array in props', () => {
  const { getByText } = renderNewPlaylistItemBar(mockProps);
  const counter = getByText('3');
  expect(counter).toBeInTheDocument();
});

test('button text changes depending on input state and input can be toggled', async () => {
  const { queryByText } = renderNewPlaylistItemBar(mockPropsNoItems);
  const button = queryByText('+ new item');

  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(mockToggleInputActive).toHaveBeenCalledTimes(1);
  expect(mockToggleInputActive).toHaveBeenCalledWith(true);
});
