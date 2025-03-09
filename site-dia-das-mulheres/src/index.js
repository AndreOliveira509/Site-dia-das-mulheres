import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Menu';
import Home from './Home';
import Direitos from './Direitos';
import Entrevistas from './Entrevistas';
import MImportantes from './m_importantes';
import Desafios from './Desafios'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/direitos" element={<Direitos />} />
          <Route path="/entrevistas" element={<Entrevistas />} />
          <Route path="/m_importantes" element={<MImportantes />} />
          <Route path="/desafios" element={<Desafios />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
