import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0084CC' },
    secondary: { main: '#04A64B' },
  },
  typography: {
    /* Tell Material-UI what's the font-size on the html element is. */
    htmlFontSize: 10,
    fontSize: 14,
  },
});

export default theme;
