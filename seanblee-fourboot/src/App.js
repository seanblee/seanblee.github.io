import React, { Component } from 'react';
import './Assets/css/default.min.css';

//Components
import Background from './Components/backgroundComponent/background';
import Cup from './Components/backgroundComponent/cup';
import Header from './Components/headerComponent/header';
import TypedReact from './Components/headerComponent/typearea';
import Mobile from './Components/mobileComponent/mobile';
import Sidebar from './Components/navComponent/sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        <Cup/>
        <Header
          name={'Sean Lee'}
          email={'15sl18@queensu.ca'}
          wip={true}
        />
        <TypedReact
          strings={[
            'Software Development Engineer Intern @ Microsoft',
            'Computer Engineer @ Queen&#39;s University',
            'Engineering Outreach @ University of Toronto'
          ]}
        />
        <Mobile/>
        <Sidebar/>
      </div>
    );
  }
}


export default App;
