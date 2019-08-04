import React, { useState } from 'react';
import './SideNav.css';

function SideNav() {
  const [navState, setNavState] = useState(false);

  const sideNavCollapseHandler = e => {
    setNavState(!navState);
    e.preventDefault();
    if (!navState) {
      document.getElementById('sideNav').style.left = '-270px';
      document.querySelector('.sideNavItems').classList.add('hide');
      document.getElementById('sideNav').style.width = '70px';
      document
        .querySelector('.sideNavToggler i')
        .classList.remove('mdi-backburger');
      document
        .querySelector('.sideNavToggler i')
        .classList.add('mdi-forwardburger');
      setTimeout(() => {
        document.getElementById('sideNav').style.left = '0px';
      }, 300);
    } else {
      document.getElementById('sideNav').style.left = '-270px';
      document.getElementById('sideNav').style.width = '270px';
      document
        .querySelector('.sideNavToggler i')
        .classList.add('mdi-backburger');
      document
        .querySelector('.sideNavToggler i')
        .classList.remove('mdi-forwardburger');

      setTimeout(() => {
        document.querySelector('.sideNavItems').classList.remove('hide');
        document.getElementById('sideNav').style.left = '0px';
      }, 300);
    }
  };
  return (
    <div id="sideNav">
      <div className="itemsIcon">
        <ul>
          <li className="sideNavToggler" onClick={sideNavCollapseHandler}>
            <i className="mdi mdi-backburger" />
          </li>
          <a href="/">
            <li>
              <i className="mdi mdi-newspaper" />
            </li>
          </a>
          <a href="/">
            <li>
              <i className="mdi mdi-ballot" />
            </li>
          </a>
          <a href="/">
            <li>
              <i className="mdi mdi-bell" />
            </li>
          </a>
          <a href="/">
            <li>
              <i className="mdi mdi-chart-timeline-variant" />
            </li>
          </a>
          <a href="/">
            <li>
              <i className="mdi mdi-message" />
            </li>
          </a>
          <a href="/">
            <li>
              <i className="mdi mdi-account-star" />
            </li>
          </a>
          <a href="/">
            <li>
              <i className="mdi mdi-wrench" />
            </li>
          </a>
        </ul>
      </div>
      <div className="sideNavItems">
        <ul>
          <li className="sideNavToggler" onClick={sideNavCollapseHandler}>
            Collapse Menu
          </li>
          <a href="/">
            <li>Newsfeed</li>
          </a>
          <a href="/">
            <li>Create Event</li>
          </a>
          <a href="/">
            <li>Notifications</li>
          </a>
          <a href="/">
            <li>Analytics</li>
          </a>
          <a href="/">
            <li>Messages</li>
          </a>
          <a href="/">
            <li>Awards</li>
          </a>
          <a href="/">
            <li>Settings</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
