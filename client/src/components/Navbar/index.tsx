import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <header className="mainHeader">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Customer Support</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
