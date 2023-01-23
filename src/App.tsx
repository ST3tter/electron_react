import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

/* Components */
import Button from '@mui/material/Button';

/* Store */

/* Styles */
import { GlobalStyles } from './theme/GlobalStyles';

const AppContainer = styled.div`
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <h1>Hello world</h1>
        <Button variant="outlined">Button</Button>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
