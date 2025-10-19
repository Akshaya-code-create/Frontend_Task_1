// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

const router = createBrowserRouter([{ path: '/*', element: <App /> }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
