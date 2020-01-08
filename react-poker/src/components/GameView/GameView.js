import React from 'react';
import Cards from '../Cards/Cards';
import Button from '../Button/Button';
import Displayer from '../Displayer/Displayer';
import Arrow from '../Arrow/Arrow';

import './GameView.css';

function GameView ({cards, text, onClick, onArrowClick}) {
    return (
    <>
      <Displayer text={text} />
      <div className="gameContainer">
        <Cards cards={cards} />
        <Button text="Check kards"
            class="gameButton"
            onClick={onClick}  />
      </div>
      <Arrow onClick={onArrowClick} />
    </>
  ) 
}

export default GameView;