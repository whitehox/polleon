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
      {isLoggedIn ? (
        <div className="profileImage">
          <div className="dropDown">
            <ul>
              <li>
                <i className="mdi mdi-camera-timer" />
                Profile Settings
              </li>
              <li>
                <i className="mdi mdi-star-outline" />
                Create Event
              </li>
              <li>
                <i className="mdi mdi-power-cycle" /> Logout
              </li>
            </ul>
            <div className="dropHeading">Status</div>
            <ul>
              <li>
                <div className="onlineStatus">
                  <input type="text" />
                  <button type="submit">
                    <i className="mdi mdi-progress-check" />
                  </button>
                </div>
              </li>
            </ul>
            <div className="dropHeading">About Polleon</div>
            <ul>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
              <li> Careers</li>
            </ul>
          </div>
          <img alt="profile" src="./assets/img/eugenio.jpg" />
          <span>whitehox</span>
          <i className="mdi mdi-chevron-down" />
        </div>
      ) : (
        ''
      )}
    </header>
  );
}

export default Navbar;
