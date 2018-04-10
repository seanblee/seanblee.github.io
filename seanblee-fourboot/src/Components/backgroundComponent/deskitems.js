import React, { Component } from 'react';
var imageName = require('../../Assets/pics/DeskThings.png');

class DeskItems extends Component {
  showPopper(){
  }

  render() {
    return (
        <div className = "desk-items">
          <img src={imageName} onClick={this.showPopper}/>
        </div>
    );
  }
}

export default DeskItems;
