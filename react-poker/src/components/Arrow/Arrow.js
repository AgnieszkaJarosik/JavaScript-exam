import React from 'react';
import '../../fontello/css/fontello.css';

import './Arrow.css';

function Arrow ({ onClick }) {
    return (
      <div className="arrow" 
            onClick={onClick}>
        <i className="icon-left-outline"></i>
      </div>
  ) 
}

export default Arrow;
