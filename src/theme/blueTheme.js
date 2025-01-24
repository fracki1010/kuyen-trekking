import { createTheme } from "@mui/material";


export const blueTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
        error: {
          main: '#e62323',
        },
        success: {
          main: '#308334',
        },
        warning: {
          main: '#ec6d05',
        },
      },
});