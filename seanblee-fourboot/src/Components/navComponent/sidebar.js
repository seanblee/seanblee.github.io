import React, { Component } from 'react';

class Sidebar extends Component {

  handleClick = (e) => {
    console.log(e.target.className)
  };

  render() {
    return (
      <div className = "sidebar">
        <ul>
          <li><a href="#" onClick ={this.handleClick} className = "projects">projects</a></li>
          <li><a href="#" onClick ={this.handleClick} className = "blog">blog</a></li>
          <li><a href="#" onClick ={this.handleClick} className = "resume">resume</a></li>
          <li><a href="#" onClick ={this.handleClick} className = "about">about</a></li>
          <li><a href="#" onClick ={this.handleClick} className = "contact">contact</a></li>
        </ul>
      </div>
    );
  }

}

export default Sidebar;
