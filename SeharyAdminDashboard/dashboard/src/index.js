import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Location from './Routes/Location';
import Employees from './Routes/Employees';
import Statistics from './Routes/Statistics';
import Home from './Routes/Home';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App></App>
    <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/location" element={<Location></Location>} />
        <Route path="/employees" element={<Employees></Employees>} />
        <Route path="/statistics" element={<Statistics></Statistics>} />
       
      
    
    </Routes>
    </BrowserRouter>
  
);

