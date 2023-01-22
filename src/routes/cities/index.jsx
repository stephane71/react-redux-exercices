import React from "react";
import { CityOverviewCardsListMemo } from "../../components/CityOverviewCardsList";
import { Button } from "@mui/material";
import { sortBy } from "../../store/cities/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectCities } from "../../store/cities/selectors";

export default function Cities() {
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();

  function handleClickSortByName() {
    dispatch(sortBy({ by: "nom", order: "desc" }));
  }

  return (
    <div>
      <div>
        <Button onClick={handleClickSortByName}>Sort By name</Button>
      </div>
      <CityOverviewCardsListMemo cities={cities} />
    </div>
  );
}
