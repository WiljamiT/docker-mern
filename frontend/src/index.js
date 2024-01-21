import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='368308639156-ljka3dkqd79u3rofnva52rpd4lag421h.apps.googleusercontent.com'>

      <App />
      <ToastContainer />

    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
