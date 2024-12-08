import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./context/authContext/LoginPage"; 
import { SignUp } from './context/authContext/SignUp';
import FeedBackPage from './components/FeedBackPage';
import Account from './components/Account';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/feedback' element={<FeedBackPage/>}/>
        <Route path='/account' element={<Account></Account>}/>
        <Route path = '/products' element = {<ProductPage></ProductPage>}/>
        <Route path='/cart' element={<CartPage></CartPage>}/>
      </Routes>
    </Router>
  );
};

export default App;
