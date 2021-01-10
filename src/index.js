import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
import ErrorBoundary from './errorBoundary';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
