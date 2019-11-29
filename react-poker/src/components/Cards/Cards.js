import React from 'react';
import Card from '../Card/Card';

import './Cards.css';

function Cards (props) {
  if(props.cards){
    return <div className="cardsContainer">
      {props.cards.map(card => {
        return <Card key={card.id}
                    id={card.id}
                    src={card.src}
                    color={card.color}
                    figure={card.figure}
                    onClick={props.onClick}
      />
    })
  }
    </div>
  } else {
    return <div></div>
  }
}

export default Cards;