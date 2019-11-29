import React from 'react';

import './Button.css';

class Button extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buttonClass: this.props.class
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClick();
    this.setState({ buttonClass: "disabledButton" })
  }

  render() {
    return <button className={this.state.buttonClass} onClick={this.handleClick}>
        {this.props.text}
      </button>
  }
}

export default Button;