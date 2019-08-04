import React from 'react';

import './Home.css';

import Navbar from '../Navbar';
import SideNav from '../SideNav';
import MainContent from '..//Dashboard/MainContent';

function Home() {
  return (
    <>
      <SideNav />
      <Navbar />
      <MainContent />
    </>
  );
}

export default Home;
