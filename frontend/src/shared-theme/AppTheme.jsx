import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState, createContext, useContext } from 'react';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export default function AppTheme({ children }) {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
      },
    }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
