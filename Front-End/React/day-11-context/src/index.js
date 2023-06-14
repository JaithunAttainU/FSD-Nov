import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import FormRef from './components/FormRef';
import Reactions from './components/Reactions';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Reactions />
);