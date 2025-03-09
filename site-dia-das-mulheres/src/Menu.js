import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu-nav">
      <img src="/logo.png" alt="Logo" className="menu-logo" />

      <ul className="menu-list">
        <li className="menu-item"><Link className="menu-link" to="/">Home</Link></li>
        <li className="menu-item"><Link className="menu-link" to="/direitos">Direitos</Link></li>
        <li className="menu-item"><Link className="menu-link" to="/entrevistas">Entrevistas</Link></li>
        <li className="menu-item"><Link className="menu-link" to="/m_importantes">Mulheres Importantes</Link></li>
        <li className="menu-item"><Link className="menu-link" to="/desafios">Desafios Atuais</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
