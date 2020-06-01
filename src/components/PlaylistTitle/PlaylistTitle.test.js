import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import PlaylistTitle from './PlaylistTitle';

afterEach(cleanup);

function renderPlaylistTitle(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <PlaylistTitle {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

test('it renders the correct content', () => {
  renderPlaylistTitle({ title: 'mock title' });
  expect(screen.getByText('mock title')).toBeInTheDocument();
  expect(screen.getByText('0%')).toBeInTheDocument();
});

test('it renders the percent complete', () => {
  renderPlaylistTitle({
    title: 'mock title',
    playlistItems: [{ is_complete: true }, { is_complete: false }],
  });
  expect(screen.getByText('50%')).toBeInTheDocument();
});
