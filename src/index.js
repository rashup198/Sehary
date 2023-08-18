import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Hero from './routes/Hero';
import { Route, Routes } from 'react-router-dom';
import Contact from './routes/Contact';
import About from './routes/About';
import Travel from './routes/Travel';
import Error from './routes/Error';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Auth0Provider
    domain="dev-8lc77ppfclgdb2xj.us.auth0.com"
    clientId="KwpuDxNIRbA08nKnko3XH6DZJrwwV6sp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Navbar></Navbar>
    
    <Routes>
    
    <Route path='/' element={<Hero></Hero>}></Route>
    <Route path='/travel' element={<Travel></Travel>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='*' element={<Error></Error>}></Route>
    

    </Routes>
    
   
    
    </Auth0Provider>
    <App /> 
    </BrowserRouter>
);

