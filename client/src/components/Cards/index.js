import React from 'react';

function Card(props) {
  return <div style={props.cardStyle}>{props.children}</div>;
}

export default Card;
