import React from 'react';
import './Themes.css';
import ProfilePage from './components/userpanel/ProfilePage';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#fafafa', // Slightly lighter for better contrast
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          padding: '20px',
        }}
      >
        <ProfilePage />
      </div>
    </ThemeProvider>
  );
};

export default App;
