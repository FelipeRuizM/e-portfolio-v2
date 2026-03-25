import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen relative selection:bg-portfolio-accent selection:text-portfolio-dark">
        <CustomCursor />
        <div className="grain-overlay"></div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
