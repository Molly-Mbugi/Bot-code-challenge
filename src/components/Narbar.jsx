// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Your Bot Army</Link></li>
        <li><Link to="/collection">Bot Collection</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
