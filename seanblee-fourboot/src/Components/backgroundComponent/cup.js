import React, { Component } from 'react';
var imageName = require('../../Assets/pics/CoffeeCup.png');

class Cup extends Component {

  showPopper(){

  }
  render() {
    return (
        <button className = "coffeeCup"><img src={imageName} onClick={this.showPopper} /></button>
    );
  }
}

export default Cup;
