import React from "react";
import Cities from "./assets/cities.json";
import "./App.css";
import CityOverviewCard from "./components/CityOverviewCard";

function App() {
  return (
    <div className="App">
      <h1>Formation React et Redux</h1>
      <div>
        <CityOverviewCard city={Cities[20]} />
        <CityOverviewCard city={Cities[565]} />
        <CityOverviewCard city={Cities[450]} />
      </div>
    </div>
  );
}

export default App;
