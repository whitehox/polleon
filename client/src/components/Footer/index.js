import React from 'react';

//Styles
import './Footer.css';

function Footer() {
  return (
    <div className="mainFooter">
      <div className="newsLetter">
        <form>
          <input
            type="email"
            id="newsEmail"
            name="newsEmail"
            placeholder="Subscribe to our Newsletter"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="mainFooterStuffs">
        <div className="footerLogo">
          <p>Polleon</p>
        </div>
        <div className="quickLinks">
          <nav>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Featured Event</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
