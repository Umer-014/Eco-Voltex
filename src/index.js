import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
  // If pre-rendered HTML exists → hydrate instead of replacing
  hydrateRoot(container, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Normal render (for client-side navigation)
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
