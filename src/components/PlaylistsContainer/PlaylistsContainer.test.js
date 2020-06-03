import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import { mockPlaylistData } from '../../../mockData/mockData';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import PlaylistsContainer from './PlaylistsContainer';

afterEach(cleanup);

function renderPlaylistsContainer(props, context, appContext) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <AppSettingsContext.Provider value={appContext}>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <PlaylistsContainer {...props} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </AppSettingsContext.Provider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

test('it renders the correct content', () => {
  renderPlaylistsContainer(
    {},
    { state: { playlists: mockPlaylistData } },
    {
      state: {
        archiveView: false,
        view: true,
      },
    }
  );
  const button = screen.getByText('Add Playlist');
  const pl1 = screen.getByText('Learn Javascript');
  const pl2 = screen.getByText('Learn Ruby');

  expect(button).toBeInTheDocument();
  expect(pl1).toBeInTheDocument();
  expect(pl2).toBeInTheDocument();
});
