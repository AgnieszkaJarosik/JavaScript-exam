import React from 'react';
import Cards from '../Cards/Cards';
import Button from '../Button/Button';
import Displayer from '../Displayer/Displayer';

import './StartView.css';

function StartView ({cards, text, onCardClick, onClick}) {

  return (
    <>
      <Displayer text={text} />
      <div className="container">
        <Cards cards={cards} onClick={onCardClick} />
        <Button text="Wylosuj karty"
            class="startButton"
            onClick={onClick}  />
      </div>
    </>
  )  
}

export default StartView;