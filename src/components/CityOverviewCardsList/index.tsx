import React from "react";
import CityOverviewCard from "../CityOverviewCard";

export default function CityOverviewCardsList({ cities, onClick }) {
  function handleClick(city) {
    return () => {
      onClick(city);
    };
  }

  return cities.map((city) => (
    <CityOverviewCard city={city} key={city.code} onClick={handleClick(city)} />
  ));
}

export const CityOverviewCardsListMemo = React.memo(CityOverviewCardsList);
