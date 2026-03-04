import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';        // <--- Import CRUCIAL
import './index.css';           // Tailwind + styles globaux

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element non trouvé');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);