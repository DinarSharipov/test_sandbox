import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.createElement('div');
root.id = 'root';

document.body.insertAdjacentElement('afterbegin', root);

const createdRoot = ReactDOM.createRoot(
  root as HTMLElement,
);
createdRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
