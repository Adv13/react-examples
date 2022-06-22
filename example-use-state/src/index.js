import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// import "./assets/params/css/fonts.googleapis.min.css";
import "./fonts.googleapis.min.css";
import './styles.css';

import App from './app/app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
