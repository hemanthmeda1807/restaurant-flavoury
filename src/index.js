// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './App'; // Import the App component
import { BrowserRouter } from 'react-router-dom';

// React 18+ syntax (createRoot API)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);