import React, { useCallback, useState } from "react";
import Cities from "./assets/cities.json";
import "./App.css";
import { CityOverviewCardsListMemo } from "./components/CityOverviewCardsList";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleClickCity = useCallback((city) => {
    setSelectedCity(city);
  }, []);

  return (
    <div className="App">
      <h1>Formation React et Redux</h1>
      {selectedCity && <div>Votre sélection: {selectedCity.nom}</div>}
      <div>
        <CityOverviewCardsListMemo cities={Cities} onClick={handleClickCity} />
      </div>
    </div>
  );
}

export default App;
