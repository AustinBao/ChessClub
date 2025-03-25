import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/navbar'
import Home from "./pages/home/home";
import Location from "./pages/location/location";
import About from "./pages/about/about";
import Executives from "./pages/executives/executives";
import Contact from "./pages/contact/contact";

function App() {

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App