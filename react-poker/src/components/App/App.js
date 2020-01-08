import React from 'react';
import StartView from '../StartView/StartView';
import GameView from '../GameView/GameView';
import Prepare from '../Logic/Prepare';
import Check from '../Logic/Check';

import './App.css';

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
        handCards: Check.sortCards([...prevState.handCards, this.state.cards[id]]),
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
    const hand = Check.checkPokerHand(this.state.handCards);
    this.setState({ set: hand });
  }
  
  render(){
    return (
      <div className="App">
        {this.state.startView ? 
          <StartView cards={this.state.cards} 
                      text="Select or draw cards"
                      onCardClick={this.handleCardClick}
                      onClick={this.handleButtonClick} /> 
        : <GameView cards={this.state.handCards} 
                    text={`Your best set is: ${this.state.set}`}   
                    onClick={this.handleCheckClick}
                    onArrowClick={this.handleViewChange} />}
      </div>
    );
  }
  
}

export default App;
