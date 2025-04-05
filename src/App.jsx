import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/navbar'
import Home from "./pages/home/home";
import Join from "./pages/join/join";
import About from "./pages/about/about";
import Executives from "./pages/executives/executives";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
        <Route path="/executives" element={<Executives />} />
      </Routes>
    </Router>
  )
}

export default App