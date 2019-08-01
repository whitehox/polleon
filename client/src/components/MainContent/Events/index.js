import React from 'react';
import './Events.css';

import Card from '../../Cards';

function Events() {
  const cardStyle = {
    width: '49%',
    margin: '0 auto 30px auto',
    background: '#FFF',
    borderRadius: '4px',
    display: 'flex',
    border: '1px solid #e6ecf5',
    height: '200px',
    boxSizing: 'border-box'
  };
  const cardStyle2 = {
    width: '49%',
    margin: '0px auto 30px auto',
    background: '#FFF',
    borderRadius: '4px',
    display: 'flex',
    border: '1px solid #e6ecf5',
    height: '500px',
    boxSizing: 'border-box'
  };
  return (
    <div className="eventMason">
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle2} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle2} />
      <Card cardStyle={cardStyle2} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle2} />
      <Card cardStyle={cardStyle} />
      <Card cardStyle={cardStyle2} />
      <Card cardStyle={cardStyle2} />
      <Card cardStyle={cardStyle2} />
      <Card cardStyle={cardStyle2} />
    </div>
  );
}

export default Events;
