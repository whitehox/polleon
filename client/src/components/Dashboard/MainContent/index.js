import React from 'react';

import SideNav from './SideNav';
import Display from './Display';
import Card from '../../Cards';
import Carousel from './Carousel';
import Events from './Events';

import './MainContent.css';

function MainContent() {
  const cardStyle = {
    width: '92%',
    margin: '30px auto 0 auto',
    height: '550px',
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
          <Carousel>
            <div className="eventBy">
              <span>
                <img alt="event by" src="/assets/img/author-main2.jpg" />
              </span>
              <p>
                Big Brother Naija<p>whitehox | Fashion</p>
              </p>
            </div>
            <img alt="event" src="/assets/img/top-header2.jpg" />
          </Carousel>
        </Card>
        <Events />
      </Display>
    </div>
  );
}

export default MainContent;
