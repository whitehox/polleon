import React from 'react';

//CSS Stylings
import './MainContent.css';

function MainContent(props) {
  return <div className="mainContent">{props.children}</div>;
}

export default MainContent;
