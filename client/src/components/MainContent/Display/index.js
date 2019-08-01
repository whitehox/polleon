import React from 'react';

import './Display.css';

function Display(props) {
  return <main id="display">{props.children}</main>;
}

export default Display;
