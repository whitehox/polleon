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
          <a href="/">
            <i className="mdi mdi-headphones" /> Customer Support
          </a>
        </li>
        <li className="headerButton">
          <a href="/">Login</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
