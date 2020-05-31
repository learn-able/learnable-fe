import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import Input from './Input';

afterEach(cleanup);

function renderInput(props, context) {
  const utils = render(
    <UserProvider>
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Input {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
    </UserProvider>
  );

  return { ...utils };
}

const mockPropsNoButton = {
  id: 'mock-id',
  hasButton: false,
  label: 'mock label',
  onChangeHandler: jest.fn(),
  placeholder: 'enter your mock input',
  value: '',
};

const mockPropsWithButton = {
  id: 'mock-id',
  hasButton: true,
  label: 'mock label',
  onButtonClick: jest.fn(),
  onChangeHandler: jest.fn(),
  placeholder: 'enter your mock input',
  value: '',
};

test('it renders an input given props and calls a change handler', () => {
  const { getByPlaceholderText } = renderInput(mockPropsNoButton);
  const input = getByPlaceholderText(mockPropsNoButton.placeholder);

  expect(input).toBeInTheDocument();
  expect(input.value).toEqual(mockPropsNoButton.value);

  fireEvent.change(input, { target: { value: 'chuck norris' } });
  expect(mockPropsNoButton.onChangeHandler).toHaveBeenCalledTimes(1);
});

test('it can render a button that defaults to disabled state', () => {
  const { getByRole, getByPlaceholderText } = renderInput(mockPropsWithButton);
  const input = getByPlaceholderText(mockPropsNoButton.placeholder);
  const button = getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test('it can render a button with an on click event if input value present', () => {
  mockPropsWithButton.value = 'test';
  const { getByRole } = renderInput(mockPropsWithButton);
  const button = getByRole('button');

  expect(button).not.toBeDisabled();
  fireEvent.click(button);

  expect(mockPropsWithButton.onButtonClick).toHaveBeenCalledTimes(1);
});
