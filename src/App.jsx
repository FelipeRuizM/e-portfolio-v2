import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen relative selection:bg-portfolio-accent selection:text-portfolio-dark">
        <CustomCursor />
        <div className="grain-overlay"></div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
