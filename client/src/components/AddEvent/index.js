import React from 'react';

//Components
import Navbar from '../Navbar';
import SideNav from '../SideNav';
import MainContent from './MainContent';
import PageHeader from '../Pageheader';

function AddEvent() {
  return (
    <>
      <SideNav />
      <Navbar />
      <MainContent>
        <PageHeader />
      </MainContent>
    </>
  );
}

export default AddEvent;
