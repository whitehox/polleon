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
<<<<<<< HEAD
          <a href="/">Customer Support</a>
=======
          <a href="/">
            <i className="mdi mdi-headphones" /> Customer Support
          </a>
        </li>
        <li className="headerButton">
          <a href="/">Login</a>
>>>>>>> b4c08922f7c7ef43f9ded343a908b113dfc24571
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
