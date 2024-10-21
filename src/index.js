import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Components/App";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Components/theme"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ThemeProvider theme = {theme}>
          <App/>
      </ThemeProvider>
  </React.StrictMode>
);

