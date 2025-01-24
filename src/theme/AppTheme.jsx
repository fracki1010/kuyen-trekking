import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { blueTheme } from "./blueTheme";
import { joyTheme, purpleTheme } from "./purpleTheme";


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>


      <CssBaseline />
      {children}

    </ThemeProvider>
  );
};
