import React from "react";
import "./App.css";
import Employees from "./components/Employees";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Data</h1>
        <Employees />
      </header>
    </div>
  );
}

export default App;
