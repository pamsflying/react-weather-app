import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="Weather">
      <div className="App">
        <Search />
        <Weather />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
