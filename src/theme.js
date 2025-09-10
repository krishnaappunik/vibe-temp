// src/theme.js

// Importing required modules
import { createMuiTheme } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';

// Setting default theme constants
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2E4053',
    },
    secondary: {
      main: '#66BB6A',
    },
    background: {
      default: '#f2f2f2',
      dark: '#333',
    },
    text: {
      primary: '#2E4053',
      secondary: '#999',
    },
  },
});

// Add dark mode theme constants
const darkModeTheme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2E4053',
    },
    secondary: {
      main: '#66BB6A',
    },
    background: {
      default: '#333',
      dark: '#444',
    },
    text: {
      primary: '#FFF',
      secondary: '#999',
    },
  },
});

// Exporting theme constants
export { theme, darkModeTheme };

// Default theme export
export default theme;