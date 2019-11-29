import React from 'react';

import './Displayer.css';

function Displayer (props) {

  return <div className="displayer">
    {props.text}
  </div>
}

export default Displayer;