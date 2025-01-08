import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { FooterData, NavbarData } from './components/data/AllData';



const App = () => {
  return (
    <Router>
      <Navbar navbar={NavbarData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer FooterData={FooterData} />
    </Router>
  );
};

export default App;
