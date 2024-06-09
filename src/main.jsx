import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { contextprovider } from "./contextprovider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <contextprovider>
    <App />
  </contextprovider>
);

