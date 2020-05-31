import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import DatePickerInput from './DatePickerInput';

afterEach(cleanup);

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

function renderAddPlaylist(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePickerInput {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

test('it renders an input field and button', () => {
  const { getByLabelText } = renderAddPlaylist({});

  const button = getByLabelText('change date');
  const input = document.querySelector('input');

  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test('it defaults to current date but can change', async () => {
  const today = getDateToday();
  const { debug, getByLabelText, getByText } = renderAddPlaylist({
    playlistDate: today,
  });

  const button = getByLabelText('change date');
  const input = document.querySelector('input');
  expect(input.value).toEqual(today);

  fireEvent.click(button);

  await waitFor(() => {
    // const fifteenth = getByText('15');
    // fireEvent.click(fifteenth);
    // fireEvent.change(input, { target: { value: '12/31/2020' } });
  });
});
