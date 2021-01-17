import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './errorBoundary';
import App from './app';
import { GlobalProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
