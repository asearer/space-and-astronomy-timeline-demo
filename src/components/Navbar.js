// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the scoped Navbar component CSS
import NotableFigures from './NotableFigures'; // Import the NotableFigures component

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/notable-figures">Notable Figures</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
