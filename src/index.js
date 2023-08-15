import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './routes/Contact';
import About from './routes/About';
import Travel from './routes/Travel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
    
    <Auth0Provider
    domain="dev-8lc77ppfclgdb2xj.us.auth0.com"
    clientId="KwpuDxNIRbA08nKnko3XH6DZJrwwV6sp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Hero></Hero>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/travel' element={<Travel></Travel>}></Route>

    </Routes>
    </BrowserRouter>
    <App />
    <Navbar></Navbar>
    
    </Auth0Provider>
    
    </div>
);

