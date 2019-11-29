import React from 'react';
import StartView from '../StartView/StartView';
import GameView from '../GameView/GameView';
import Prepare from '../Logic/Prepare';
import Check from '../Logic/Check';

import './App.css';
import { checkServerIdentity } from 'tls';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      startView: true,
      counter: 0,
      set: '',
      cards: null, 
      handCards: []
    }

    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      cards: Prepare.createCards()
    })
  }

  handleViewChange () {
    this.setState({ 
      startView: true,
      counter: 0,
      set: '',
      handCards: []
    })
  }

  handleCardClick (id) {
    if (this.state.counter===4) {
      this.setState(prevState => ({
        startView: false,
        handCards: Prepare.sortCards([...prevState.handCards, this.state.cards[id]]),
        counter: this.state.counter + 1,
      }))
    } else {
      this.setState(prevState => ({
        handCards: [...prevState.handCards, this.state.cards[id]],
        counter: this.state.counter + 1,
      }))
    }
  }

  handleButtonClick() {
    this.setState({ handCards: Prepare.drawCards(this.state.cards, 5),
                    startView: false });
  }

  handleCheckClick () {
    if(Check.searchRoyalFlush(this.state.handCards)){
      this.setState({ set: 'Poker królewski' });
    } else if(Check.searchStraightFlush(this.state.handCards)){
      this.setState({ set: 'Poker' });
    } else if(Check.searchQuads(this.state.handCards)){
      this.setState({ set: 'Kareta' });
    } else if(Check.searchFullHouse(this.state.handCards)){
      this.setState({ set: 'Full' });
    } else if(Check.searchFlush(this.state.handCards)){
      this.setState({ set: 'Kolor' });
    } else if(Check.searchStraight(this.state.handCards)){
      this.setState({ set: 'Strit' });
    } else if(Check.searchThreeOfAKind(this.state.handCards)){
      this.setState({ set: 'Trójka' });
    } else if(Check.searchTwoPair(this.state.handCards)){
      this.setState({ set: 'Dwie pary' });
    } else if(Check.searchOnePair(this.state.handCards)){
      this.setState({ set: 'Para' });
    } else {
      this.setState({ set: 'Wysoka karta' });
    }
  }
  
  render(){
    return (
      <div className="App">
        {this.state.startView ? 
          <StartView cards={this.state.cards} 
                      text="Wybierz lub wylosuj karty"
                      onCardClick={this.handleCardClick}
                      onClick={this.handleButtonClick} /> 
        : <GameView cards={this.state.handCards} 
                    text={`Twój najlepszy układ to: ${this.state.set}`}   
                    onClick={this.handleCheckClick}
                    onArrowClick={this.handleViewChange} />}
      </div>
    );
  }
  
}

export default App;
