import React, { useState } from "react";
import Cities from "./assets/cities.json";
import "./App.css";
import CityOverviewCard from "./components/CityOverviewCard";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  function handleClickCity(city) {
    return () => {
      setSelectedCity(city);
    };
  }

  return (
    <div className="App">
      <h1>Formation React et Redux</h1>
      {selectedCity && <div>Votre sélection: {selectedCity.nom}</div>}
      <div>
        {Cities.map((city) => (
          <CityOverviewCard
            city={city}
            key={city.code}
            onClick={handleClickCity(city)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
