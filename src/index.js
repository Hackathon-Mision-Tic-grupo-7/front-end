import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-7wmznvx4.us.auth0.com"
    clientId="Vuq4mVNpzyOHa6mclPD4iAWUYrogh6mq"
    redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


