import React from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './AppTheme';

export default function ColorModeSelect({ sx }) {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <IconButton sx={sx} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
