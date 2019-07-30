import React, { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  cardStyle: CSSProperties;
}

function Card(props: Props) {
  return <div style={props.cardStyle}>{props.children}</div>;
}

export default Card;
