import { useParams } from "react-router-dom";
import CityOverviewCard from "../../components/CityOverviewCard";
import React from "react";
import { useSelector } from "react-redux";
import { selectCities } from "../../store/cities/selectors";

export default function City() {
  const { code } = useParams();
  const cities = useSelector(selectCities);

  const city = cities.find((city) => code === city.code);

  return (
    <div>
      <CityOverviewCard city={city} />
    </div>
  );
}
