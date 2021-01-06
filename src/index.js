import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
import { App, ErrorBoundary } from './containers';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
