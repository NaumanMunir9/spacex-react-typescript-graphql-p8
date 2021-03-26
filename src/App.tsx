import React from "react";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={LaunchDetails} />
      </div>
    </Router>
  );
};

export default App;
