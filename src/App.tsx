import React from "react";
import "./App.css";
import StopwatchClass from "./components/StopwatchClass";
import StopWatchComp from "./components/StopwatchComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StopwatchClass />
        <StopWatchComp />
      </header>
    </div>
  );
}

export default App;
