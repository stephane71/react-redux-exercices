import React from "react";
import CityOverviewCard from "../CityOverviewCard";
import { useNavigate } from "react-router-dom";

export default function CityOverviewCardsList({ cities }) {
  const navigate = useNavigate();

  function handleClick(city) {
    return () => {
      navigate(`/cities/${city.code}`);
    };
  }

  return cities.map((city) => (
    <CityOverviewCard city={city} key={city.code} onClick={handleClick(city)} />
  ));
}

export const CityOverviewCardsListMemo = React.memo(CityOverviewCardsList);
