import React from "react";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Launches />
      <LaunchDetails />
    </div>
  );
};

export default App;
