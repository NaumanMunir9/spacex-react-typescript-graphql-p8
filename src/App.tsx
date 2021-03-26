import React from "react";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Launches />
      <LaunchDetails />
    </div>
  );
};

export default App;
