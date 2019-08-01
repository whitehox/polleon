import React, { useEffect, useState } from 'react';
import './Navbar.css';
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="mainHeader">
      <input type="text" placeholder="Search for events" />
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
          {isLoggedIn ? <a href="/">Logout</a> : <a href="/">Login</a>}
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
