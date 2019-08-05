import React from 'react';

//CSS Stylings
import './PageHeader.css';

function PageHeader() {
  return (
    <div id="pageHeader">
      <div className="headerBannerDisplay">
        <div className="pageHeaderText">
          <h1>Your Account Dashboard</h1>
          <p>
            Welcome to your account dashboard! Here you’ll find everything you
            need to change your profile information, settings, read
            notifications and requests, view your latest messages, change your
            pasword and much more! Also you can create or manage your own
            favourite page, have fun!
          </p>
        </div>
        <img
          className="imgBottom"
          alt="page header"
          src="./assets/img/account-bottom.png"
        />
      </div>
    </div>
  );
}

export default PageHeader;
