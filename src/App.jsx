import { useState } from 'react'
import './App.css'
import Nav from './pages/Nav'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainPage from './pages/MainPage'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#64dd17',
    },
    grey: {
      main: "#f5f5f5"
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },

  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Nav />
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
