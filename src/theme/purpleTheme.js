import { extendTheme } from "@mui/joy";
import { createTheme } from "@mui/material";

export const joyTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1e495e', // Misma paleta que en purpleTheme
        },
        secondary: {
          main: '#e84a16',
        },
        neutral: {
          main: '#64748B',
        },
        defaultBg: '#f0f0f0', // Fondo por defecto
      },
    },
  },
});


export const purpleTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e495e',
    },
    secondary: {
      main: '#e84a16',
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
  typography: {
    h3: {
      fontFamily: 'Anton SC',
    },
  },
});
