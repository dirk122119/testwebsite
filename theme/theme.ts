import * as React from 'react';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const webTheme = createTheme({
    palette: {
      primary: {
        main: '#c9a063',
      },
    },
  });
export default webTheme