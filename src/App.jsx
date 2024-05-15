import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';


function App(){
  

  return(
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          

          

        </Routes>
      </Router>
    
      
  
      
    </>
  );
}

export default App
