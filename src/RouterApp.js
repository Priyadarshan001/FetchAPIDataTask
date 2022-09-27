import React from 'react';
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';
import Cart from './Component/Cart';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function RouterApp() {
  return (
     <BrowserRouter>
        <div className="container">
            <Navbar/>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/carts" element={<Cart />} />
            </Routes>
        </div>
     </BrowserRouter>
  );
}

export default RouterApp;
