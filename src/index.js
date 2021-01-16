import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './errorBoundary';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
