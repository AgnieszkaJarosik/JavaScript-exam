import React from 'react';

import './Card.css';

class Card extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      active: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    if(this.props.onClick) {
      this.props.onClick(this.props.id);
      this.setState({ active: true })
    } 
  }

  render() {
    return (
      <div className={this.state.active ? "card active disabled" :"card"} onClick={this.handleClick}>
        <img src={this.props.src} alt="card" />
      </div>)
  }
}

export default Card;