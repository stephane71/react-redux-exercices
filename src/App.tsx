import React from "react";
import Cities from "./assets/cities.json";
import "./App.css";
import CityOverview from "./components/CityOverview";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Formation React et Redux</h1>
      <div>
        <Card>
          <CityOverview city={Cities[20]} />
        </Card>
        <Card>
          <CityOverview city={Cities[565]} />
        </Card>
        <Card borderRadius={10}>
          <CityOverview city={Cities[450]} />
        </Card>
      </div>
    </div>
  );
}

export default App;
