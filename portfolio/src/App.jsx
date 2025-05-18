import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ThemeProvider } from './components/ThemeContext';
import Contact from './components/Contact';
import './App.css'
import './index.css'
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
 
  return (
    <>
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
