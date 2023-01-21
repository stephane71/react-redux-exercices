import React from "react";
import Cities from "./assets/cities.json";
import "./App.css";
import CityOverviewCard from "./components/CityOverviewCard";

function App() {
  return (
    <div className="App">
      <h1>Formation React et Redux</h1>
      <div>
        {Cities.map((city) => (
          <CityOverviewCard city={city} key={city.code} />
        ))}
      </div>
    </div>
  );
}

export default App;
