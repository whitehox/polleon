import React from 'react';

import SideNav from './SideNav';
import Display from './Display';
import Card from '../Cards';
import Carousel from './Carousel';
import Events from './Events';

import './MainContent.css';

function MainContent() {
  const cardStyle = {
    width: '92%',
    margin: '30px auto 0 auto',
    background: '#FFF',
    borderRadius: '4px',
    display: 'flex',
    border: '1px solid #e6ecf5'
  };
  return (
    <div className="homeMain">
      <SideNav />
      <Display>
        <Card cardStyle={cardStyle}>
          <Carousel />
        </Card>
        <Events />
      </Display>
    </div>
  );
}

export default MainContent;
