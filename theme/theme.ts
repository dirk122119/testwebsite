import * as React from 'react';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const webTheme = createTheme({
    palette: {
      primary: {
        main: '#c9a063',
      },
      secondary: {
        main: '#6B4240',
      },
    },
  });
export default webTheme