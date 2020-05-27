import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import UserProvider from '../../contexts/userContext';
import DueDate from './DueDate';

function renderDueDate(props) {
  const utils = render(
    <UserProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DueDate {...props} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </UserProvider>
  );

  return { ...utils };
}

const mockDueDate = '10/10/2020';

test('it renders the correct due date based on dueDate prop', () => {
  const { getByText } = renderDueDate({ dueDate: mockDueDate });
  const p = `Due: ${mockDueDate}`;
  expect(getByText(p)).toBeInTheDocument();
});
