import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createApi from './behavior/api';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const api = createApi();

root.render(
  <React.StrictMode>
    <App api={api} />
  </React.StrictMode>
);
