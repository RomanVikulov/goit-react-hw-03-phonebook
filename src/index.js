import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/App';

const root = document.getElementById('root');
// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
