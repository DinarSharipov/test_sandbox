import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

let root = document.getElementById('extRoot');

if (!root) {
  root = document.createElement('div');
  root.id = 'extRoot';
  document.body.insertAdjacentElement('afterbegin', root);
}

const createdRoot = ReactDOM.createRoot(
  root,
);

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

createdRoot.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
