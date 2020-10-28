import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import "./App.css";

export default function App() {
    return (
        <div className="Weather">
        <div className="App">
          <Search />
          <Weather />
        </div>
      </div>
    );
  }

