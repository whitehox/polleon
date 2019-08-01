import React from 'react';

import './Home.css';

import Navbar from '../Navbar';
import SideNav from '../SideNav';
import MainContent from '../MainContent';

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
