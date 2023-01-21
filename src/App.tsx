import React from "react";
import Cities from "./assets/cities.json";
import "./App.css";
import CityOverview from "./components/CityOverview";

function App() {
  return (
    <div className="App">
      <h1>Formation React et Redux</h1>
      <div>
        <CityOverview city={Cities[20]} />
        <CityOverview city={Cities[565]} />
        <CityOverview city={Cities[450]} />
      </div>
    </div>
  );
}

export default App;
