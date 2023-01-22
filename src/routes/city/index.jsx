import CITIES from "../../assets/cities.json";
import { useParams } from "react-router-dom";
import CityOverviewCard from "../../components/CityOverviewCard";
import React from "react";

export default function City() {
  const { code } = useParams();

  const city = CITIES.find((city) => code === city.code);

  return (
    <div>
      <CityOverviewCard city={city} />
    </div>
  );
}
