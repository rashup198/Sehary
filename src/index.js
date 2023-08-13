import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
    <Auth0Provider
    domain="dev-8lc77ppfclgdb2xj.us.auth0.com"
    clientId="KwpuDxNIRbA08nKnko3XH6DZJrwwV6sp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <App />
    <Navbar></Navbar>
    </Auth0Provider>
    
    </>
);

