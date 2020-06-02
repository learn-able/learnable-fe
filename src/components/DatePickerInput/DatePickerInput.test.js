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

function renderDatePickerInput(props, context) {
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

const setPlaylistDate = jest.fn();

test('it renders an input field and button', () => {
  const today = getDateToday();
  const { getByLabelText } = renderDatePickerInput({
    playlistDate: today,
    setPlaylistDate,
  });

  const button = getByLabelText('change date');
  const input = document.querySelector('input');

  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test('it defaults to current date but can change', async () => {
  const today = getDateToday();
  const { getByLabelText } = renderDatePickerInput({
    playlistDate: today,
    setPlaylistDate,
  });

  const button = getByLabelText('change date');
  const input = document.querySelector('input');
  expect(input.value).toEqual(today);

  fireEvent.click(button);

  await waitFor(() => {
    fireEvent.change(input, { target: { value: '12/31/2020' } });
    expect(setPlaylistDate).toHaveBeenCalledTimes(1);
    expect(setPlaylistDate).toHaveBeenCalledWith('12/31/2020');
  });
});
