import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main"
import "../styles/App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
          <React.Fragment>
              <Route exact path="/" component={Main} />
          </React.Fragment>
      </Router>
    </React.Fragment>
  );
}

export default App;
