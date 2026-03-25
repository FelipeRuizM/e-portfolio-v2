import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import InventorySystem from './pages/projects/InventorySystem';
import DCaveGame from './pages/projects/DCaveGame';
import MomsStudy from './pages/projects/MomsStudy';
import Ecommerce from './pages/projects/Ecommerce';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/inventory-system" element={<InventorySystem />} />
      <Route path="/project/dcave-game" element={<DCaveGame />} />
      <Route path="/project/moms-study" element={<MomsStudy />} />
      <Route path="/project/e-commerce" element={<Ecommerce />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen relative selection:bg-portfolio-accent selection:text-portfolio-dark">
        <CustomCursor />
        <div className="grain-overlay"></div>
        <AnimatedRoutes />
      </div>
    </HashRouter>
  );
}

export default App;
