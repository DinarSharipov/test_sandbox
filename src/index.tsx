import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './index.css';
import Input from './components/ui/Input/Input';
import { extractStyles } from './services/utils';

let root = document.getElementById('extRoot');

if (!root) {
  root = document.createElement('div');
  root.id = 'extRoot';
  document.body.insertAdjacentElement('afterbegin', root);
}

const createdRoot = ReactDOM.createRoot(
  root,
);

const a = true;

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
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">4</button>
    <Input classes={extractStyles(`
      ${!a && 'bg-slate-500'}
      p-[20px]`)}
    />
  </React.StrictMode>,
);
