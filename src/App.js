import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider, createTheme,Box } from '@mui/material';
import Home from './pages/home';
import StockPage from './pages/stockpage';
import './App.css';

const theme = createTheme({
  palette: {
      primary: {
          main: '#2196f3', // Blue
      },
      secondary: {
          main: '#f50057', // Pink
      },
  },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className="dynamic-background" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Router>
                <Container maxWidth="md">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/stock/:symbol" element={<StockPage />} />
                    </Routes>
                </Container>
            </Router>
            </Box>
        </ThemeProvider>
    );
}

export default App;