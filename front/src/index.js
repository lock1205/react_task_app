import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google'; // 이부분을 새로 인스톨 시켜야 한다. 인증받기 위한 부분
import { Provider } from 'react-redux';
import store from './redux/store';

const googleClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
console.log(googleClientId);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
