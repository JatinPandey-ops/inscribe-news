import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SSRProvider from 'react-bootstrap/SSRProvider';

ReactDOM.render(
  <React.StrictMode>

<SSRProvider>
  <App />
</SSRProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
