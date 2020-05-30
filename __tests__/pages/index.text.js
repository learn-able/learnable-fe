import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/styles/theme';
import Index from '../../pages/index';

test.skip('renders without crashing', () => {
  const { debug, getByText } = render(
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  );

  debug();
  expect(getByText('My page')).toBeInTheDocument();
});
