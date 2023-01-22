import { useParams } from "react-router-dom";
import CityOverviewCard from "../../components/CityOverviewCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectCity } from "../../store/cities/selectors";
import { fetchCity } from "../../store/cities/slice";

export default function City() {
  const { code } = useParams();
  const dispatch = useDispatch();
  const city = useSelector(selectCity);

  useEffect(() => {
    dispatch(fetchCity(code));
  }, [dispatch, code]);

  if (!city) {
    return null;
  }

  return (
    <div>
      <CityOverviewCard city={city} />
    </div>
  );
}
