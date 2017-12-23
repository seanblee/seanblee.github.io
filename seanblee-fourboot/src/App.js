import React, { Component } from 'react';
import './Assets/css/default.min.css';

//Components
import Header from './Components/headerComponent/header';
import Projects from './Components/bodyComponent/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Projects/>
      </div>
    );
  }
}

export default App;
