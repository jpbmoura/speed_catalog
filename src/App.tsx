import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PromotionsPage from './pages/PromotionsPage';
import SetupGuidePage from './pages/SetupGuidePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/promotions" element={<Layout><PromotionsPage /></Layout>} />
        <Route path="/setup-guide" element={<SetupGuidePage />} />
      </Routes>
    </Router>
  );
}

export default App;