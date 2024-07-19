import React from 'react'
import ReactDOM from 'react-dom/client'

import ThemeContextProvider from './context/theme-context.tsx'
import ActiveSectionContextProvider from './context/active-section-context.tsx'

import App from './App.tsx'
import './locales/i18n.ts';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <App />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
